import fetch from 'isomorphic-unfetch';
import { NextApiRequest, NextApiResponse } from 'next';
import { Item } from '../../../../services/qiita/models';

export default async (
  _: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const response = await fetch(
      'https://qiita.com/api/v2/items?page=1&per_page=20',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
        },
      },
    );

    if (response.status !== 200) {
      throw new Error(`response error status:${response.status}`);
    }

    const items: Array<Item> = await response.json();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
