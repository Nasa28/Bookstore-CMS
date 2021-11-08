import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';
import '../styles/BookList.css';

const BooksForm = () => {
  const options = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const [book, setBook] = useState({
    title: '',
    category: options[0],
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (book.title && book.category) {
      dispatch(createBook(book.title, book.category));
      setBook({
        title: '',
        category: '',
      });
    }
  };
  return (
    <>
      <h3 className="form-title">ADD NEW BOOK</h3>
      <div className="book-form">
        <input
          className="input"
          value={book.title}
          onChange={handleChange}
          type="text"
          name="title"
          required
          placeholder="Book title"
        />
        <select
          onChange={handleChange}
          name="category"
          placeholder="Category"
          defaultValue="DEFAULT"
          className="options"
        >
          <option value="DEFAULT" disabled>
            Category
          </option>
          {options.map((option) => (
            <option name="category" value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          className="submit"
          type="submit"
          value="ADD BOOK"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default BooksForm;
