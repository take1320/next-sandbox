export const ActionType = {
  START_CLOCK: 'START_CLOCK',
  STOP_CLOCK: 'STOP_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
} as const;

export const startClock = () => ({
  type: ActionType.START_CLOCK,
});

export const stopClock = () => ({
  type: ActionType.STOP_CLOCK,
});

export const tickClock = (isServer: boolean) => ({
  type: ActionType.TICK_CLOCK,
  light: !isServer,
  ts: Date.now(),
});

export type ClockAction =
  | ReturnType<typeof startClock>
  | ReturnType<typeof stopClock>
  | ReturnType<typeof tickClock>;
