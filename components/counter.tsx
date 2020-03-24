import React, { FC } from 'react';

export interface CounterProps {
  count: number;
  increment?: () => void;
  decrement?: () => void;
  reset?: () => void;
}

const Counter: FC<CounterProps> = ({
  count = 0,
  increment = () => undefined,
  decrement = () => undefined,
  reset = () => undefined,
}) => {
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
