import React, { FC } from 'react';
import Link from 'next/link';
import { List, Image, Label, Dimmer, Loader } from 'semantic-ui-react';

import * as Qiita from '../../services/qiita/models';

type Props = {
  items?: Qiita.Item[];
  isLoading: boolean;
};

const Items: FC<Props> = ({ items = [], isLoading = false }) => {
  return isLoading ? (
    <Dimmer active inverted>
      <Loader size="big">Loading</Loader>
    </Dimmer>
  ) : (
    <List divided relaxed>
      {items.map((i: Qiita.Item) => (
        <List.Item key={i.id}>
          <Image avatar size="mini" src={i.user.profile_image_url} />
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
  );
};

export default Items;
