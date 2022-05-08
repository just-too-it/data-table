import axios from 'axios';

import { URL_GETTING_POSTS } from '../constants/url.constants';

export const getPosts = async (limit, page, query) => {
  try {
    const response = await axios.get(URL_GETTING_POSTS, {
      params: {
        _limit: limit,
        _page: page,
        q: query,
      },
    });
    return response;
  } catch (error) {
    alert(error);
  }
};
