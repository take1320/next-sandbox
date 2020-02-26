import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import Layout from '../../components/Layout';
import * as Qiita from '../../services/qiita/models';
import QiitaItems from '../../components/Qiita/Items';
import { getItemsFactory } from '../../services/qiita/api';

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

ItemsPage.getInitialProps = async (_: NextPageContext): Promise<Props> => {
  const fetchItems = getItemsFactory();
  const items = await fetchItems();
  return { items };
};

export default ItemsPage;
