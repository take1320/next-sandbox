import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadData } from '../actions/userData';
import { ReduxState } from '../reducers/rootReducer';
import Page from '../components/Page';

// MEMO: Containerで引数を受け取りたいので、Props型定義
export interface PageContainerPops {
  title: string;
  linkTo: string;
  NavigateTo: string;
}

const PageContainer: FC<PageContainerPops> = ({
  title,
  linkTo,
  NavigateTo,
}) => {
  const dispatch = useDispatch();
  const storeStates = useSelector((state: ReduxState) => ({
    placeholderData: state.userData.placeholderData,
  }));

  // SSR時に読み込み済みの場合は新しくロードを実行しないか検証
  useEffect(() => {
    if (!storeStates.placeholderData) {
      console.log('useEffect loadData');
      dispatch(loadData());
    } else {
      console.log('unused useEffect loadData');
    }
  }, []);

  return (
    <Page
      placeholderData={storeStates.placeholderData}
      title={title}
      linkTo={linkTo}
      NavigateTo={NavigateTo}
    />
  );
};

export default PageContainer;
