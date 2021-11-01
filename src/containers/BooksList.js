import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const bookList = useSelector((state) => state.book.books);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksList;
