import React from 'react';
import Proptypes from 'prop-types';
import '../App.css';
import { useDispatch } from 'react-redux';
import { getBook, delBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handledelBook = (id) => {
    dispatch(delBook(id));
    dispatch(getBook());
  };

  return (
    <div className="books-wrap">
      <div className="book-wrapper">
        <div className="book-title">
          <p className="category">Fiction</p>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
          <div className="buttons">
            <button type="button" className="comments">Comments</button>
            <div className="Line-2" />
            <button onClick={() => (handledelBook(id))} type="submit" className="remove">Remove</button>
            <div className="Line-2" />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="circular">
          <div className="spinner" />
          <div>
            <h2>
              {Math.floor(Math.random() * 100)}
              %
            </h2>
            <p>Completed</p>
          </div>
          <div className="Line-3" />
        </div>
        <div className="chapter-details">
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapterno">Chapter 17</p>
          <div className="rectangle">
            <button type="button">UPDATE PROGRESS</button>
          </div>
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
