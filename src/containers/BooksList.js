import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = () => {
  const bookList = useSelector((state) => state['book'].books);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => dispatch(removeBook(book.id));
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={handleRemoveBook}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksList;
