import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../redux/books/books';
import '../App.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  // handle Add book
  const handleAddBook = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(AddBook(book));
    setTitle('');
    setAuthor('');
  };

  const handleChangeTitle = (e) => (setTitle(e.target.value));

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form className="Addbookform" onSubmit={handleAddBook}>
      <input onChange={handleChangeTitle} type="text" placeholder="book title" />
      <input onChange={handleChangeAuthor} type="text" placeholder="author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
