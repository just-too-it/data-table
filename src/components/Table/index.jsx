import { Row } from './Row';

export const Table = ({ posts, postsPerPage }) => {

  const getCellsForTable = (items) => {
    let content = [];
    for (let i = 0; i < postsPerPage; i++) {
      const item = items[i];
      if (item) {
        content.push(<Row post={item} key={item.id} />);
      } else {
        content.push(<Row post={null} key={i + 1} />);
      }
    }
    return content;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table__head">ID</th>
          <th className="table__head">Заголовок</th>
          <th className="table__head">Описание</th>
        </tr>
      </thead>
      <tbody>{getCellsForTable(posts)}</tbody>
    </table>
  );
};
