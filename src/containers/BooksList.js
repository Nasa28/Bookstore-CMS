import React from 'react';
import { useSelector } from 'react-redux';

const BooksList = () => {
  const books = useSelector((state)=> state.books)
  return (
    <>
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default BooksList;
