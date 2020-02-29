import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReduxState } from '../../reducers/rootReducer';
import { getItem } from '../../actions/qiita';
import ItemDetail from '../../components/qiita/ItemDetail';

interface Props {
  id: string | string[];
}

const ItemDetailContainer: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const storeStates = useSelector((state: ReduxState) => ({
    itemDetail: state.qiita.itemDetail,
  }));

  // SSR時に読み込み済みの場合は新しくロードを実行しないか検証
  useEffect(() => {
    if (!storeStates.itemDetail) {
      dispatch(getItem.start({ id }));
      console.log('used container dispatch!');
    } else {
      console.log('unused container dispatch');
    }
  }, []);

  return <ItemDetail item={storeStates.itemDetail} />;
};

export default ItemDetailContainer;
