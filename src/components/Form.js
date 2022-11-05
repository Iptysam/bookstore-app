import React from 'react';
import '../App.css';

const Form = () => (
  <form className="Addbookform">
    <input type="text" placeholder="book title" />
    <input type="text" placeholder="author" />
    <button type="submit">Add Book</button>
  </form>
);

export default Form;
