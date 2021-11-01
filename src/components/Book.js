const Book = ({ book }) => {
  return (
    <div>
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
      </tr>
    </div>
  );
};

export default Book;
