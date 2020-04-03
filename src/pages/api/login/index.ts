import { NextApiRequest, NextApiResponse } from 'next';
import Session from '../../../server/models/session';

// import testUser from '../../../models/testUser';
import * as auth from '../../../server/services/auth';
import { setCookie } from '../../../server/utils/cookie';

export default async (
  _req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  // stateを作る
  const state = auth.createState();

  // sessionを作る
  const session = await Session.create({
    state: state,
  });

  // sessionJWTを作る
  const sessionJwt = auth.encryptSessionJwt({ id: session.id });

  // cookieにSessionを渡す
  setCookie(res, 'session', sessionJwt, {
    path: '/api',
    maxAge: 6000,
  });

  // リダイレクトする
  res.writeHead(302, { Location: auth.createAuthorizationUrl(state) });
  res.end();
};
