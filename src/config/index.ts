export type Config = {
  qiitaToken: string;
  qiitaClientId: string;
  qiitaClientSecret: string;
};

export const env: Config = {
  qiitaToken: process.env.QIITA_TOKEN || '',
  qiitaClientId: process.env.QIITA_CLIENT_ID || '',
  qiitaClientSecret: process.env.QIITA_CLIENT_SECRET || '',
};

// export QIITA_TOKEN=b3c4635a7ebe648966797c2e7b4176a0f326b7da
// export QIITA_CLIENT_ID=569b10b2e276dfc2e1b57368a27e54cdb0075ec6
// export QIITA_CLIENT_SECRET=ee889f360b84549964ca5865870947310e9640c5
