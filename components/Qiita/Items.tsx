import React, { FC } from 'react';
import Link from 'next/link';
import * as Qiita from '../../services/qiita/models';

type Props = {
  items: Array<Qiita.Item>;
};

const Item: FC<Props> = props => (
  <ul>
    {props.items.map((i: Qiita.Item) => (
      <li key={i.id}>
        <Link href="/items/[id]" as={`/items/${i.id}`}>
          <a>{i.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Item;
