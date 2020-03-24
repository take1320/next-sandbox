import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReduxState } from '../../reducers/rootReducer';
import { getItems } from '../../actions/qiita';
import Items from '../../components/qiita/Items';

const ItemsContainer: FC = () => {
  const dispatch = useDispatch();
  const storeStates = useSelector((state: ReduxState) => ({
    items: state.qiita.items,
    isLoading: state.qiita.isLoading,
  }));

  // SSR時に読み込み済みの場合は新しくロードを実行しないか検証
  useEffect(() => {
    if (!storeStates.items) {
      dispatch(getItems.start());
      console.log('used container dispatch!');
    } else {
      console.log('unused container dispatch');
    }
  }, []);

  return <Items items={storeStates.items} isLoading={storeStates.isLoading} />;
};

export default ItemsContainer;
