import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { increment, decrement, reset } from '../actions/counter';
import { ReduxState } from '../reducers/rootReducer';
import Counter, { CounterProps } from '../components/Counter';

interface DispatchProps {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const mapStateToProps = (state: ReduxState): CounterProps => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
