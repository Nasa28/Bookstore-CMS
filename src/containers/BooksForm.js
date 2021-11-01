import { useState } from 'react';

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
  const [title, setTitle] = useState(options);
  console.log(title);
  console.log(setTitle);
  return (
    <div>
      <form>
        <div className="mb-3">
          <div className="form-group mb-3">
            <label htmlFor="title">
              Title:
              <input type="text" name="title" className="form-control" />
            </label>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="category">
              Category:
              <select className="form-control" name="category">
                {options.map((option) => (
                  <option key={option}>{option}</option>
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
