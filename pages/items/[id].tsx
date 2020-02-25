import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import { makeApiUrl } from '../../lib/api';
import * as Qiita from '../../services/qiita/models';
import QiitaItemDetail from '../../components/Qiita/ItemDetail';

type Props = {
  item: Qiita.Item;
};
const ItemPage: NextPage<Props> = props => (
  <Layout>
    <div>
      <h1>Qiita Item Detail</h1>
      <QiitaItemDetail item={props.item} />
    </div>
  </Layout>
);

ItemPage.getInitialProps = async (context: NextPageContext): Promise<Props> => {
  const { query, req } = context;
  const { id } = query;
  const res = await fetch(makeApiUrl(`/api/qiita/items/${id}`, req));
  const item = await res.json();
  return { item };
};

export default ItemPage;
