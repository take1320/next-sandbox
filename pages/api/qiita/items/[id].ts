import fetch from 'isomorphic-unfetch';
import { NextApiRequest, NextApiResponse } from 'next';
import { Item } from '../../../../services/qiita/models';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const { id } = req.query;
    const response = await fetch(`https://qiita.com/api/v2/items/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
      },
    });

    if (response.status !== 200) {
      throw new Error(`response error status:${response.status}`);
    }

    const item: Item = await response.json();
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
