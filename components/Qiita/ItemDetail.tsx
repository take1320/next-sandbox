import React, { FC } from 'react';
import * as Qiita from '../../services/qiita/models';

type Props = {
  item: Qiita.Item;
};

const Item: FC<Props> = props => (
  <>
    <h2>{props.item.title}</h2>
    <div>
      <p>ユーザ名: {props.item.user.name}</p>
      <p>作成日: {props.item.created_at}</p>
      <a href={props.item.url} target="_blank" rel="noreferrer noopener">
        Qiita
      </a>
      <p>本文L: {props.item.body}</p>
    </div>
  </>
);

export default Item;
