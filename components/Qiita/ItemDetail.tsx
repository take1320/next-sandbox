import React, { FC } from 'react';
import * as Qiita from '../../services/qiita/models';

type Props = {
  item: Qiita.Item;
};

const ItemDetail: FC<Props> = ({ item }) => (
  <>
    <h2>{item.title}</h2>
    <div>
      <p>ユーザ名: {item.user.name}</p>
      <p>作成日: {item.created_at}</p>
      <a href={item.url} target="_blank" rel="noreferrer noopener">
        Qiita
      </a>
      <p>本文L: {item.body}</p>
    </div>
  </>
);

export default ItemDetail;
