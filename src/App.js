import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from './components/Pagination';

import { Search } from './components/Search';
import { Table } from './components/Table';
import { getPosts } from './core/services/posts.service';
import { getNumberPages } from './core/utils/pages';

export const App = () => {
  const [posts, setPosts] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);
  const postsPerPage = useSelector((state) => state.registry.postsPerPage);
  const currentPage = useSelector((state) => state.registry.currentPage);

  async function fetchPosts() {
    const posts = await getPosts(postsPerPage, currentPage);
    setPosts(posts.data);
    const totalCount = posts.headers['x-total-count'];
    setPagesCount(getNumberPages(totalCount, postsPerPage));
  }

  useEffect(() => {
    void fetchPosts();
  }, [currentPage]);

  return (
    <div className="container">
      <Search />
      {posts ? <Table posts={posts} pageNumber={currentPage} postsPerPage={postsPerPage} /> : null}
      <Pagination currentPage={currentPage} pagesCount={pagesCount} />
    </div>
  );
};
