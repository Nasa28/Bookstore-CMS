const CategoryFilter = (props) => {
  const { handleFilterChange } = props;
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
      <select onChange={handleFilterChange} name="filter">
        {filters.map((filter) => (
          <option name="category" value={filter} key={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
