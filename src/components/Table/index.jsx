import { Head } from './Head';
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
          <Head name="ID" sort="id" />
          <Head name="Заголовок" sort="title" />
          <Head name="Описание" sort="body" />
        </tr>
      </thead>
      <tbody>{getCellsForTable(posts)}</tbody>
    </table>
  );
};
