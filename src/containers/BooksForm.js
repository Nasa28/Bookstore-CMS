import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';

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
  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState(options[0]);
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
    dispatch(createBook(book.title, book.category));
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="form-group mb-3">
            <label htmlFor="title">
              Title:
              <input
                value={book.title}
                onChange={handleChange}
                type="text"
                name="title"
                className="form-control"
                required
              />
            </label>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="category">
              Category:
              <select
                onChange={handleChange}
                className="form-control"
                name="category"
                defaultValue="DEFAULT"
              >
                <option value="DEFAULT" disabled>
                  Choose here
                </option>
                {options.map((option) => (
                  <option name="category" value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default BooksForm;
