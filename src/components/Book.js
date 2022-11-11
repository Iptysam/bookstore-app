import React from 'react';
import Proptypes from 'prop-types';
import '../App.css';
import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  return (
    <div className="books-wrap">
      <div className="book-wrapper">
        <div className="book-title">
          <h2>{title}</h2>
          <p>{author}</p>
          <button type="button">Comments</button>
          <button onClick={() => dispatch(delBook({ id, dispatch }))} type="submit">Remove</button>
          <button type="button">edit</button>
        </div>
        <div className="book-meter">
          <h2>64%</h2>
          <p>Completed</p>
        </div>
        <div>
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>

  );
};

Book.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
};

export default Book;
