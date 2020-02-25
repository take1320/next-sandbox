import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import { makeApiUrl } from '../../lib/api';
import * as Qiita from '../../services/qiita/models';

type Props = {
  items: Array<Qiita.Item>;
};

const ItemsPage: NextPage<Props> = props => (
  <Layout>
    <div>
      <h1>Qiita Items</h1>
      <ul>
        {props.items.map((i: Qiita.Item) => (
          <li key={i.id}>
            <Link href="/items/[id]" as={`/items/${i.id}`}>
              <a>{i.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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
