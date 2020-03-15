import url from 'url';
import uuid from 'uuid';

// stateの作成
export const createAuthorizationState = (): string => {
  return uuid.v4();
};

// qiita urlの生成
export const createAuthorizationUrl = (state: string): string => {
  return url.format({
    protocol: 'https',
    host: 'qiita.com',
    pathname: 'api/v2/oauth/authorize',
    query: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      client_id: process.env.QIITA_CLIENT_ID,
      scope: 'read_qiita',
      state: state,
    },
  });
};

// cookieのキー
export const getCookieConst = {
  STATE: 'QIITA/STATE',
};
