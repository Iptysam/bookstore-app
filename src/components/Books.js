import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Book
          id={book.id}
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
