import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { increment, decrement, reset } from '../actions/counter';
import { ReduxState } from '../reducers/rootReducer';
import Counter, { CounterProps } from '../components/Counter';
import { FC } from 'react';

interface DispatchProps {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

type EnhancedProps = DispatchProps & CounterProps;

const mapStateToProps = (state: ReduxState): CounterProps => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      increment: () => increment(),
      decrement: () => decrement(),
      reset: () => reset(),
    },
    dispatch,
  );

const CounterContainer: FC<EnhancedProps> = props => {
  return <Counter {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
