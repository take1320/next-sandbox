import { connect } from 'react-redux';

import { ReduxState } from '../reducers/rootReducer';
import Clock, { ClockProps } from '../components/Clock';

// import { increment, decrement, reset } from '../actions/counter';
import { FC } from 'react';
import { startClock, tickClock } from '../actions/clock';
import { bindActionCreators, Dispatch } from 'redux';

interface DispatchProps {
  startClock: () => void;
  tickClock: (isServer: boolean) => void;
}

type EnhancedProps = DispatchProps & ClockProps;

const mapStateToProps = (state: ReduxState): ClockProps => ({
  lastUpdate: state.clock.lastUpdate,
  light: state.clock.light,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      startClock: () => startClock(),
      tickClock: (isServer: boolean) => tickClock(isServer),
    },
    dispatch,
  );

const ClockContainer: FC<EnhancedProps> = props => {
  // MEMO: SSR時に時計を動かしたいなら、getInitialPropsの中でtifckCLockする
  // useEffect(() => {
  //   props.startClock();
  //   props.tickClock(false);
  // }, []);

  return <Clock {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(ClockContainer);
