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
            <div className="divides">
              <button className="btn d-block" type="button">
                Comments
              </button>

              <div className="link-divider" />
            </div>
            <div className="divides">
              <button
                className="btn d-block"
                onClick={handleRemoveBook}
                type="button"
              >
                Remove
              </button>

              <div className="link-divider" />
            </div>
            <div>
              <button className="btn" type="button">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="divide">
          <div className="circle">
            <div className="round" />
            <div>
              {`${num}%`}
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="divider" />
        </div>
        <div className="update-progress">
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
