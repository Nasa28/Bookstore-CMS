import React from 'react';

const categoryFilter = () => {
  const filters = [
    'All',
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
      <select onChange={handleChange} className="form-control" name="category">
        {filters.map((filter) => (
          <option name="category" value={filter} key={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default categoryFilter;
