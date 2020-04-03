import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, reset } from '../redux/actions/counter';
import { ReduxState } from '../redux/reducers/rootReducer';
import Counter from '../components/Counter';

const CounterContainer: FC = () => {
  const dispatch = useDispatch();
  const dispatchActions = {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
  const storeStates = useSelector((state: ReduxState) => ({
    count: state.counter.count,
  }));

  return (
    <Counter
      count={storeStates.count}
      increment={dispatchActions.increment}
      decrement={dispatchActions.decrement}
      reset={dispatchActions.reset}
    />
  );
};

export default CounterContainer;
