import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import Layout from '../../components/Layout';
import ItemDetailContainer from '../../container/qiita/ItemDetail';
import { getItem } from '../../actions/qiita';

interface ItemProps {
  id: string | string[];
}

const ItemPage: NextPage<ItemProps> = ({ id }) => (
  <Layout>
    <ItemDetailContainer id={id} />
  </Layout>
);

ItemPage.getInitialProps = async (ctx: NextPageContext): Promise<ItemProps> => {
  const { store, query } = ctx;
  const { id } = query;
  store.dispatch(getItem.start({ id }));
  return { id };
};

export default ItemPage;
