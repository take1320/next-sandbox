import { v4 as uuidv4 } from 'uuid';
import url from 'url';
import querystring from 'querystring';
import jwt, { SignOptions } from 'jsonwebtoken';
import { env } from '../config/index';
import Session from '../models/session';
import { decode } from 'punycode';

export const createSession = async () => {
  // stateを生成
  const state = 'hogehoge';
  // sessionレコードを生成
  // return はどうする？
  // session objectを返そうぜ
};

export const createState = (): string => {
  return uuidv4();
};

export const createAuthorizationUrl = (state: string): string => {
  const queryParam = querystring.stringify({
    // eslint-disable-next-line @typescript-eslint/camelcase
    client_id: env.qiitaClientId,
    scope: 'read_qiita+write_qiita_team',
    state: state,
  });

  const authUrl = url.format({
    protocol: 'https',
    hostname: 'qiita.com',
    pathname: 'api/v2/oauth/authorize',
    search: queryParam,
  });

  return authUrl;
};

export interface SessionPayload {
  id: number;
}

export const encryptSessionJwt = (payload: SessionPayload): string => {
  return jwt.sign(payload, env.jwtSecret);
};

export const dencryptSessionJwt = (sessionJwt: string): SessionPayload => {
  const decoded = jwt.verify(sessionJwt, env.jwtSecret);
  return decoded.valueOf() as SessionPayload;
};
