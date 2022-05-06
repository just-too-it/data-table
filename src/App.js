// eslint-disable-next-line import/no-unresolved
import { useEffect, useState } from 'react';
import { Search } from './components/Search';
// eslint-disable-next-line import/no-unresolved
import { Table } from './components/Table';
import { getPosts } from './core/services/posts.service';

export const App = () => {
  const [posts, setPosts] = useState(null);

  async function fetchPosts() {
    const posts = await getPosts();
    setPosts(posts);
  }

  useEffect(() => {
    void fetchPosts();
  }, []);

  return (
    <div className="container">
      <Search />
      {posts ? <Table posts={posts} pageNumber={1} postsPerPage={10} /> : null}
    </div>
  );
};
