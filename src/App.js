import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Search } from './components/Search';
import { Table } from './components/Table';
import { getPosts } from './core/services/posts.service';

export const App = () => {
  const [posts, setPosts] = useState(null);
  const postsPerPage = useSelector((state) => state.registry.postsPerPage);
  const currentPage = useSelector((state) => state.registry.currentPage);

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
      {posts ? <Table posts={posts} pageNumber={currentPage} postsPerPage={postsPerPage} /> : null}
    </div>
  );
};
