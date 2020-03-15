import fetch from 'isomorphic-unfetch';
import { Item } from './models';
// import { makeApiUrl } from '../../lib/api';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  // TODO: baseUrlを動的に設定
  baseURL: 'http://localhost:3000',
  timeout: 7000,
};

export const getItemsFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };

  const getItems = async () => {
    const response = await fetch(`${config.baseURL}/api/qiita/items`);

    if (response.status !== 200) {
      throw new Error(`Server Error${response.status}`);
    }
    const items: Item[] = await response.json();

    return items;
  };

  return getItems;
};

export const getItemFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };

  const getItem = async (id: string | string[]) => {
    const response = await fetch(`${config.baseURL}/api/qiita/items/${id}`);

    if (response.status !== 200) {
      throw new Error(`Server Error${response.status}`);
    }
    const item: Item = await response.json();

    return item;
  };

  return getItem;
};
