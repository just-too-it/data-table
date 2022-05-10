import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search';
import { Table } from '../../components/Table';
import { getPosts } from '../../core/services/posts.service';
import { getNumberPages, getNumberPageFromUrl } from '../../core/utils/pages';
import { registryActions } from '../../store/registrySlice';

export const Main = () => {
  const [posts, setPosts] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);
  const registry = useSelector((state) => state.registry);
  const { postsPerPage, currentPage, searchQuery, sortBy, sortOrderById, sortOrderByTitle, sortOrderByBody } = registry;
  let [sortOrder, setSortOrder] = useState(sortOrderById);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useMemo(() => {
    switch (sortBy) {
      case 'id':
        setSortOrder(sortOrderById);
        break;
      case 'title':
        setSortOrder(sortOrderByTitle);
        break;
      case 'body':
        setSortOrder(sortOrderByBody);
        break;
      default:
        break;
    }
  }, [sortBy, sortOrderById, sortOrderByTitle, sortOrderByBody]);

  useEffect(() => {
    const numberPage = getNumberPageFromUrl(location.search);
    numberPage > 0 && numberPage < pagesCount
      ? dispatch(registryActions.setCurrentPage(numberPage))
      : dispatch(registryActions.setCurrentPage(1));
  }, []);

  async function fetchPosts() {
    const posts = await getPosts(postsPerPage, currentPage, searchQuery, sortBy, sortOrder);
    setPosts(posts.data);
    const totalCount = posts.headers['x-total-count'];
    setPagesCount(getNumberPages(totalCount, postsPerPage));
  }

  useEffect(() => {
    void fetchPosts();
  }, [currentPage, searchQuery, sortBy, sortOrder]);

  useEffect(() => {
    navigate(`?page=${currentPage}`);
  }, [currentPage]);

  return (
    <div className="container">
      <Search />
      {posts ? <Table posts={posts} postsPerPage={postsPerPage} /> : null}
      <Pagination currentPage={currentPage} pagesCount={pagesCount} />
    </div>
  );
};
