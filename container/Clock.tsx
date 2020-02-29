import { FC } from 'react';
import { useSelector } from 'react-redux';

import { ReduxState } from '../reducers/rootReducer';
import Clock from '../components/Clock';

const ClockContainer: FC = () => {
  const storeStates = useSelector((state: ReduxState) => ({
    lastUpdate: state.clock.lastUpdate,
    light: state.clock.light,
  }));

  // MEMO: SSR時に時計を動かしたいなら、getInitialPropsの中でtifckCLockする
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(startClock());
  //   dispatch(tickClock(false));
  // }, []);

  return (
    <Clock lastUpdate={storeStates.lastUpdate} light={storeStates.light} />
  );
};

export default ClockContainer;
