export const Row = ({ post }) => {
  return (
    <tr className="row">
      {post ? (
        <>
          <td className="row__cell">{post.id}</td>
          <td className="row__cell">{post.title}</td>
          <td className="row__cell">{post.body}</td>
        </>
      ) : (
        <>
          <td className="row__cell"></td>
          <td className="row__cell"></td>
          <td className="row__cell"></td>
        </>
      )}
    </tr>
  );
};
