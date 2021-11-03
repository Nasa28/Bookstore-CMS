import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, handleRemoveBook } = props;
  const { id, title, category } = book;

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>
          <button onClick={handleRemoveBook} type="button">
            Remove Book
          </button>
        </td>
      </tr>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.objectOf).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
