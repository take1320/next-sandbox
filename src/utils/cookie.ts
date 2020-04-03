import { NextApiResponse, NextApiRequest } from 'next';
import { serialize, CookieSerializeOptions } from 'cookie';

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: any,
  options: CookieSerializeOptions = {},
): void => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

  // maxAge指定の場合、maxAgeからexpireをセット
  if (options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge);
    options.maxAge /= 1000;
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options));
};

export const getCookie = (req: NextApiRequest, name: string): string => {
  if (!req.cookies[name]) {
    throw new Error('session error');
  }
  return req.cookies[name];
};

// /**
//  * Adds `cookie` function on `res.cookie` to set cookies for response
//  */
// const cookies = (handler: any) => (
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) => {
//   res.cookie = (name, value, options) => cookie(res, name, value, options);

//   return handler(req, res);
// };

// export default cookies;
