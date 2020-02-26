export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

export function increment() {
  return { 
    type: actionTypes.INCREMENT as typeof actionTypes.INCREMENT
  };
}

export function decrement() {
  return { type: actionTypes.DECREMENT as typeof actionTypes.DECREMENT};
}

export function reset() {
  return { type: actionTypes.RESET as typeof actionTypes.DECREMENT};
}

export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;
