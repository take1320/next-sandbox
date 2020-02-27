import { FC, useEffect } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadData } from '../actions/userData';
import { ReduxState } from '../reducers/rootReducer';
import Page, { PageProps } from '../components/Page';

interface DispatchProps {
  loadData: () => void;
}

type EnhancedProps = DispatchProps & PageProps;

const mapStateToProps = (state: ReduxState): PageProps => ({
  placeholderData: state.userData.placeholderData,
  title: 'Sample Page hoge',
  linkTo: '/other',
  NavigateTo: 'Other Page',
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      loadData: () => loadData(),
    },
    dispatch,
  );

const PageContainer: FC<EnhancedProps> = props => {
  // SSR時に読み込み済みの場合は新しくロードを実行しないか検証
  useEffect(() => {
    if (!props.placeholderData) {
      console.log('useEffect loadData');
      props.loadData();
    } else {
      console.log('unused useEffect loadData');
    }
  }, []);

  return <Page {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
