import * as ActionType from './clockConstatnts';

export const startClock = () => ({
  type: ActionType.START_CLOCK as typeof ActionType.START_CLOCK,
});

export const tickClock = (isServer: boolean) => ({
  type: ActionType.TICK_CLOCK as typeof ActionType.TICK_CLOCK,
  light: !isServer,
  ts: Date.now(),
});

export type ClockAction =
  | ReturnType<typeof startClock>
  | ReturnType<typeof tickClock>;
