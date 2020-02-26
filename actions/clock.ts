export const actionTypes = {
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
};

export function startClock() {
  return {
    type: actionTypes.START_CLOCK as typeof actionTypes.START_CLOCK,
  };
}

export function tickClock(isServer: boolean) {
  return {
    type: actionTypes.TICK_CLOCK as typeof actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}

export type ClockAction =
  | ReturnType<typeof startClock>
  | ReturnType<typeof tickClock>;
