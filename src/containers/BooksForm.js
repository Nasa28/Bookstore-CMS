import React from 'react';
import Select from 'react-select';

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
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Category:
          <Select options={options} name="category" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default BooksForm;
