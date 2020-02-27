import Link from 'next/link';

import Counter from './Counter';
import Clock from './Clock';

export interface PageProps {
  error?: any;
  linkTo?: any;
  NavigateTo?: any;
  placeholderData?: any;
  title?: string;
  lastUpdate?: any;
  light?: any;
  count?: any;
  increment?: any;
  decrement?: any;
  reset?: any;
}

function Page({
  error,
  linkTo,
  NavigateTo,
  placeholderData,
  title,
  lastUpdate,
  light,
  count,
  increment,
  decrement,
  reset,
}: PageProps) {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
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
}
export default Page;
