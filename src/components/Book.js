import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = (props) => {
  const { book, handleRemoveBook } = props;
  const { title, category } = book;
  const num = Math.floor(Math.random() * 90 + 10);
  return (
    <>
      <div className="main-div">
        <div className="book-container">
          <span className="categories">{category}</span>
          <h3 className="title">{title}</h3>
          <span className="author">Author</span>
          <div className="btns">
            <button className="btn" type="button">
              Comments
            </button>
            <button className="btn" onClick={handleRemoveBook} type="button">
              Remove
            </button>
            <button className="btn" type="button">
              Edit
            </button>
          </div>
        </div>

        <div className="circle">
          <div className="round" />
          <div>
            {`${num}%`}
            <p className="completed">Completed</p>
          </div>
        </div>

        <div className="update-progress">
          <div className="divider" />
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter">Chapter No</p>
          <button type="button" className="update-btn">
            Update Progress
          </button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.objectOf).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
