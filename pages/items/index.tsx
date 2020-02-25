import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import { makeApiUrl } from '../../lib/api';
import * as Qiita from '../../services/qiita/models';
import QiitaItems from '../../components/Qiita/Items';

type Props = {
  items: Array<Qiita.Item>;
};

const ItemsPage: NextPage<Props> = props => (
  <Layout>
    <div>
      <h1>Qiita Items</h1>
      <QiitaItems items={props.items} />
    </div>
  </Layout>
);

ItemsPage.getInitialProps = async (
  context: NextPageContext,
): Promise<Props> => {
  const { req } = context;
  const res = await fetch(makeApiUrl('/api/qiita/items', req));
  const items = await res.json();
  return { items };
};

export default ItemsPage;
