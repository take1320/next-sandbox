import { connect } from 'react-redux';

import Page, { PageProps } from '../components/Page';
import { ClockState } from '../reducers/clock';
import { CounterState } from '../reducers/counter';
import { UserDataState } from '../reducers/userData';
import { Dispatch } from 'redux';
import { increment, decrement, reset } from '../actions/counter';

type RootState = {
  clock: ClockState;
  counter: CounterState;
  userData: UserDataState;
};

interface DispatchProps {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const mapStateToProps = (state: RootState): PageProps => ({
  lastUpdate: state.clock.lastUpdate,
  light: state.clock.light,
  count: state.counter.count,
  placeholderData: state.userData.placeholderData,
  title: 'Sample Page',
  linkTo: '/other',
  NavigateTo: 'Other Page',
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
