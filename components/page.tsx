import Link from 'next/link';
import { connect } from 'react-redux';

import Counter from './counter';
import Clock from './clock';

function Page({
  error,
  linkTo,
  NavigateTo,
  userData,
  title,
  clock,
  counter
}: any) {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={clock.lastUpdate} light={clock.light} />
      <Counter counter={counter}/>
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {userData.placeholderData && (
        <pre>
          <code>{JSON.stringify(userData.placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
}
export default connect(state => state)(Page);
