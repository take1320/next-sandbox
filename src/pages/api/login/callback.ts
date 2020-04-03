import { NextApiRequest, NextApiResponse } from 'next';
import Session from '../../../server/models/session';

import { env } from '../../../server/config/index';
import * as auth from '../../../server/services/auth';
import * as qiita from '../../../services/qiita/api';
import { getCookie } from '../../../server/utils/cookie';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  // パラメータ取得
  const { code, state } = req.query;
  if (
    !code ||
    !(typeof code == 'string') ||
    !state ||
    !(typeof state == 'string')
  ) {
    throw new Error('parameter error');
  }

  // cookies無しの場合はエラー
  // TODO: クッキーのキーを型指定したい
  const cookieSession = getCookie(req, 'session');

  // sessionJWTのデコード
  const payload = auth.dencryptSessionJwt(cookieSession);

  // sessionの取得
  const session = await Session.findByPk(payload.id, { raw: true });
  if (!session) {
    throw new Error('session not exists');
  }

  // stateの検証
  if (state !== session.state) {
    console.log('state');
    console.log([state, session.state]);
    throw new Error('state verify error');
  }

  // access_tokenのリクエスト
  const postAccessToken = qiita.postAccessTokenFactory();
  const accessToken = await postAccessToken(
    env.qiitaClientId,
    env.qiitaClientSecret,
    code,
  );

  // session.access_tokenの更新
  // 認証結果を返す
  res.end();
};
