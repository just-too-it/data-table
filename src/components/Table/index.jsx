export const Table = ({ posts, pageNumber, postsPerPage }) => {
  const start = (pageNumber - 1) * postsPerPage;
  const end = start + postsPerPage;
  const postsOnDisplay = posts.slice(start, end);

  const getCellsForTable = (items) => {
    let content = [];
    for (let i = 0; i < postsPerPage; i++) {
      const item = items[i];
      if (item !== undefined) {
        content.push(
          <tr key={item.id}>
            <td className="table__cell">{item.id}</td>
            <td className="table__cell">{item.title}</td>
            <td className="table__cell">{item.body}</td>
          </tr>
        );
      } else {
        content.push(
          <tr key={i + 1}>
            <td className="table__cell"></td>
            <td className="table__cell"></td>
            <td className="table__cell"></td>
          </tr>
        );
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
      <tbody>{getCellsForTable(postsOnDisplay)}</tbody>
    </table>
  );
};
