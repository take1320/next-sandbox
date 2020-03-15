import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { getItems } from '../../actions/qiita';
import Layout from '../../components/Layout';
import { Header } from 'semantic-ui-react';
import ItemsContainer from '../../container/qiita/Items';

const ItemsPage: NextPage = () => {
  return (
    <Layout>
      <Header as="h1">Qiita投稿一覧</Header>
      <ItemsContainer />
    </Layout>
  );
};

ItemsPage.getInitialProps = async (ctx: NextPageContext): Promise<void> => {
  const { store } = ctx;
  store.dispatch(getItems.start());
};

export default ItemsPage;
