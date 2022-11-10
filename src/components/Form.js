import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from './src/redux/books';
import '../App.css';

function Form() {
  const dispatch = useDispatch();

  const [bookObj, setBookObj] = useState({
    id: null,
    title: null,
    author: null,
  });

  const authorRef = useRef(bookObj);
  const titleRef = useRef(bookObj);

  const addBookHandler = (added) => {
    added.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const id = uuidv4();
    setBookObj((previusState) => ({
      ...previusState,
      title,
      author,
      id,
    }));
  };

  const dispatcher = (e) => {
    e.preventDefault();
    dispatch(AddBook(bookObj));
  };

  return (
    <form className="Addbookform" OnSubmit = { () => { addBookHandler(); }} OnChange = {dispatcher}>
      <input type="text" placeholder="book title" />
      <input type="text" placeholder="author" />
      <button type="submit">Add Book</button>
    </form>
  );
}