import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/categoryFilter';

const BooksList = () => {
  const bookList = useSelector((state) => state.book.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => dispatch(removeBook(id));

  const filteredBooks = bookList.filter(
    (book) => book.category === filter || filter === 'All',
  );

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <div>
        <CategoryFilter handleFilterChange={handleFilterChange} />
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={() => handleRemoveBook(book.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksList;
