import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { NextPageContext, NextPage } from 'next';
import { Container } from 'semantic-ui-react';

import createStore from '../store/configureStore';

import 'semantic-ui-css/semantic.min.css';

interface Props {
  Component: NextPage;
  store: any;
}

class MyApp extends App<Props> {
  static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: NextPage;
    ctx: NextPageContext;
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
