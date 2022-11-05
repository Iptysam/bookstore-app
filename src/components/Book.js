import React from 'react';
import Proptypes from 'prop-types';
import '../App.css';

const Book = ({ title, author }) => (
  <div className="book-wrapper">
    <div className="book-title">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Comments</button>
      <button type="button">Remove</button>
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

);

Book.propTypes = {
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
};

export default Book;
