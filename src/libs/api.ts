import { IncomingMessage } from 'http';

export function makeApiUrl(
  path: string,
  req: IncomingMessage | undefined,
): string {
  if (req && typeof window === 'undefined') {
    // サーバ実行時のパスを取得
    const host = req.headers.host;
    if (host && host.startsWith('localhost')) {
      return `http://localhost:3000${path}`;
    } else {
      return `https://${host}${path}`;
    }
  } else {
    // クライアント実行時のパスを取得
    return path;
  }
}
