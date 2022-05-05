// eslint-disable-next-line import/no-unresolved
import { Search } from './components/Search';
// eslint-disable-next-line import/no-unresolved
import { Table } from './components/Table';

export const App = () => {
  const posts = [
    { id: 1, title: 'title1', body: 'body1' },
    { id: 2, title: 'title2', body: 'body2' },
  ];
  return (
    <div className="container">
      <Search />
      <Table posts={posts} pageNumber={1} postsPerPage={10} />
    </div>
  );
};
