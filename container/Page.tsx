import { connect } from 'react-redux';

import { ReduxState } from '../reducers/rootReducer';
import Page, { PageProps } from '../components/Page';

const mapStateToProps = (state: ReduxState): PageProps => ({
  placeholderData: state.userData.placeholderData,
  title: 'Sample Page',
  linkTo: '/other',
  NavigateTo: 'Other Page',
});

export default connect(mapStateToProps)(Page);
