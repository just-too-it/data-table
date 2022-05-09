export const Row = ({ post }) => {
  return (
    <tr className="table__row">
      {post ? (
        <>
          <td className="table__cell">{post.id}</td>
          <td className="table__cell">{post.title}</td>
          <td className="table__cell">{post.body}</td>
        </>
      ) : (
        <>
          <td className="table__cell"></td>
          <td className="table__cell"></td>
          <td className="table__cell"></td>
        </>
      )}
    </tr>
  );
};
