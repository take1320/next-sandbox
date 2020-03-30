import Link from 'next/link';

import Counter from '../container/Counter';
import Clock from '../container/Clock';
import { FC } from 'react';

export interface PageProps {
  title?: string;
  linkTo?: string;
  NavigateTo?: string;
  placeholderData?: any;
  error?: any;
}

const Page: FC<PageProps> = ({
  linkTo = '',
  NavigateTo = '',
  placeholderData = {},
  title = '',
  error = {},
}) => (
  <div>
    <h1>{title}</h1>
    <Clock />
    <Counter />
    <nav>
      <Link href={linkTo}>
        <a>Navigate: {NavigateTo}</a>
      </Link>
    </nav>
    {placeholderData && (
      <pre>
        <code>{JSON.stringify(placeholderData, null, 2)}</code>
      </pre>
    )}
    {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
  </div>
);

export default Page;
