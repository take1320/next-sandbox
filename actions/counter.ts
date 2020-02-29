import * as ActionType from './counterConstants';

export const increment = () => ({
  type: ActionType.INCREMENT as typeof ActionType.INCREMENT,
});

export const decrement = () => ({
  type: ActionType.DECREMENT as typeof ActionType.DECREMENT,
});

export const reset = () => ({
  type: ActionType.RESET as typeof ActionType.RESET,
});

export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;
