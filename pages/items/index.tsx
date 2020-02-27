import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { useSelector } from 'react-redux';
import { getItems } from '../../actions/qiita';
import { ReduxState } from '../../reducers/rootReducer';
import Layout from '../../components/Layout';
import QiitaItems from '../../components/qiita/Items';

const ItemsPage: NextPage = () => {
  const storeStates = useSelector((state: ReduxState) => ({
    items: state.qiita.items,
  }));

  return (
    <Layout>
      <div>
        <h1>Qiita Items</h1>
        <QiitaItems items={storeStates.items} />
      </div>
    </Layout>
  );
};

ItemsPage.getInitialProps = async (ctx: NextPageContext): Promise<void> => {
  const { store } = ctx;
  store.dispatch(getItems.start());
};

export default ItemsPage;
