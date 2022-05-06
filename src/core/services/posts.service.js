import axios from 'axios';

import { URL_GETTING_POSTS } from '../constants/url.constants';

export const getPosts = async () => {
  try {
    const response = await axios.get(URL_GETTING_POSTS);
    return response.data;
  } catch (error) {
    alert(error);
  }
};
