import { connect } from 'react-redux';

import { ReduxState } from '../reducers/rootReducer';
import Clock, { ClockProps } from '../components/Clock';

const mapStateToProps = (state: ReduxState): ClockProps => ({
  lastUpdate: state.clock.lastUpdate,
  light: state.clock.light,
});

export default connect(mapStateToProps)(Clock);
