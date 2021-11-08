import { useSelector, useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/categoryFilter';
import '../styles/BookList.css';

const BooksList = () => {
  const bookList = useSelector((state) => state.book.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => dispatch(removeBook(id));

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const filteredBooks = bookList.filter(
    (book) => book.category === filter || filter === 'All',
  );

  return (
    <>
      <div className="booklist">
        <nav className="containers">
          <div className="main">
            <h1 className="logo-title">Bookstore CMS</h1>
            <p className="book">BOOKS</p>
            <CategoryFilter handleFilterChange={handleFilterChange} />
          </div>
          <div className="user-icon">
            <FaUserAlt />
          </div>
        </nav>
        <div>
          {filteredBooks.map((book) => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={() => handleRemoveBook(book.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksList;
