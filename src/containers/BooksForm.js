import React from 'react';

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
  return (
    <div>
      <form>
        <div className="mb-3">
          <div className="form-group mb-3">
            <label>
              Title:
              <input type="text" name="title" className="form-control" />
            </label>
          </div>

          <div className="form-group mb-3">
            <label>
              Category:
              <select className="form-control">
                {options.map((option, index) => (
                  <option key={index}>{option}</option>
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
