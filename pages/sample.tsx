import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { useDispatch } from 'react-redux';

import { loadData } from '../actions/userData';
import { startClock, tickClock } from '../actions/clock';
import Layout from '../components/Layout';
import Page from '../container/Page';

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(startClock());
  });

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <Page title="Hello Hooks!" linkTo="/items" NavigateTo="Qiita Items" />;
    </Layout>
  );
};

IndexPage.getInitialProps = async (
  ctx: NextPageContext,
): Promise<{ isServer: boolean }> => {
  const { store, isServer } = ctx;
  store.dispatch(tickClock(isServer));

  // Stateの状態による実行有無の判定確認
  if (!store.getState().userData.placeholderData) {
    console.log('getInitialProps loadData!');
    store.dispatch(loadData());
  } else {
    console.log('unused getInitialProps loadData');
  }

  return { isServer };
};

export default IndexPage;
