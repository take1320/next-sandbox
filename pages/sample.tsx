import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { connect, useDispatch } from 'react-redux';

import { loadData } from '../actions/userData';
import { startClock, tickClock } from '../actions/clock';
import Layout from '../components/Layout';
import Page from '../components/page';

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(startClock());
  });

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />;
    </Layout>
  );
};

IndexPage.getInitialProps = async (
  ctx: NextPageContext,
): Promise<{ isServer: boolean }> => {
  const { store, isServer } = ctx;
  store.dispatch(tickClock(isServer));

  if (!store.getState().userData.placeholderData) {
    store.dispatch(loadData());
  }

  return { isServer };
};

export default connect()(IndexPage);