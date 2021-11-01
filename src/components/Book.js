const Book = ({ book }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        <tr>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.category}</td>
        </tr>
      </table>
    </div>
  );
};

export default Book;
