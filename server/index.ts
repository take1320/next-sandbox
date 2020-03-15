import next from 'next';
import express, { Router, Request, Response } from 'express';
import * as auth from './auth';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // body-parserに基づいた着信リクエストの解析
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  const router: Router = express.Router();

  router.get('/auth/login', (_req: Request, res: Response) => {
    // stateの生成
    const state = auth.createAuthorizationState();
    // URLの生成
    const url = auth.createAuthorizationUrl(state);
    // CookieへのStateのセット
    res.cookie(auth.getCookieConst.STATE, state, {
      path: '/',
      httpOnly: true,
    });
    // 生成URLへのリダイレクト
    res.redirect(302, url);
  });

  // router.get('/auth/callback', (req: Request, res: Response) => {
  // if (req.cookies[auth.getCookieConst.STATE] == req.query.state) {
  //   return res.redirect(auth.redirectAppErrorUrl());
  // }
  // セッションの作成
  // セッションIDをCookieにセット
  // ログイン後の画面へ繊維
  // 認証等に失敗した場合、エラー画面へ繊維
  // });

  server.use(router);

  server.get('*', (req: Request, res: Response) => {
    return handle(req, res);
  });
  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log(
      `> Ready on ${process.env.CLIENT_URL || `http://localhost:${port}`}`,
    );
  });
});
