import axios from 'axios';

export const getPosts = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = await axios.get(URL);
    /* console.log(Array.from(response.data) ); */
    return response.data;
  } catch (error) {
    alert(error);
  }
};
