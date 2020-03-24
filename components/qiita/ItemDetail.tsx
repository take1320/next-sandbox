import React, { FC } from 'react';
import Markdown from 'react-markdown';

import * as Qiita from '../../services/qiita/models';
import {
  Header,
  Card,
  Image,
  Divider,
  Label,
  Loader,
  Dimmer,
} from 'semantic-ui-react';

type Props = {
  item?: Qiita.Item;
  isLoading: boolean;
};

const ItemDetail: FC<Props> = ({ item = {}, isLoading = false }) => {
  return isLoading ? (
    <Dimmer active inverted>
      <Loader size="big">Loading</Loader>
    </Dimmer>
  ) : (
    <>
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="massive"
            avatar
            src={item.user?.profile_image_url}
          />
          <Card.Header>@{item.user?.id}</Card.Header>
          <Card.Meta>
            <p>{item.updated_at}に更新しました</p>
          </Card.Meta>
        </Card.Content>
      </Card>
      <Header as="h2">{item.title}</Header>
      {item.tags?.map((t: Qiita.Tag, i) => (
        <Label tag key={i} size="tiny">
          {t.name}
        </Label>
      ))}
      <Divider />
      <Markdown source={item.body} />
    </>
  );
};

export default ItemDetail;
