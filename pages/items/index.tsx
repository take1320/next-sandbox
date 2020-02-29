import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { getItems } from '../../actions/qiita';
import Layout from '../../components/Layout';
import ItemsContainer from '../../container/qiita/Items';

const ItemsPage: NextPage = () => {
  return (
    <Layout>
      <div>
        <h1>Qiita Items</h1>
        <ItemsContainer />
      </div>
    </Layout>
  );
};

ItemsPage.getInitialProps = async (ctx: NextPageContext): Promise<void> => {
  const { store } = ctx;
  store.dispatch(getItems.start());
};

export default ItemsPage;
