import React, { FC } from 'react';
import Link from 'next/link';
import { List, Image, Button, Icon, Label } from 'semantic-ui-react';

import * as Qiita from '../../services/qiita/models';

type Props = {
  items?: Qiita.Item[];
};

const Items: FC<Props> = ({ items = [] }) => (
  <>
    <List>
      {items.map((i: Qiita.Item) => (
        <List.Item key={i.id}>
          <Image avatar size="tiny" src={i.user.profile_image_url} />
          <List.Content>
            <List.Description>
              <a
                href={`https://qiita.com/${i.user.id}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                {i.user.name || i.user.id}
              </a>
              が{i.created_at}に投稿しました
            </List.Description>
            <List.Header>
              <Link href="/items/[id]" as={`/items/${i.id}`}>
                {i.title}
              </Link>
            </List.Header>
            <List.Description>
              {i.tags.map((t: Qiita.Tag, i) => (
                <Label tag key={i} size="tiny">
                  {t.name}
                </Label>
              ))}
            </List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
    <Button size="small" color="green">
      <Icon name="download" />
      Download
    </Button>
  </>
);

export default Items;
