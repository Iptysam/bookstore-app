const ADDBOOK = 'bookstore-app/books/ADDBOOK';
const DELETEBOOK = 'bookstore-app/books/DELETEBOOK';

const initialState = [
  {
    id: 1,
    title: 'THE GREAT GATSBY',
    author: 'F. Scott Fitzgerald',
  },

  {
    id: 2,
    title: 'THE SOUND AND THE FURY',
    author: ' William Faulkner',
  },

  {
    id: 3,
    title: 'LOLITA',
    author: 'Vladimir Nabokov',
  },

  {
    id: 4,
    title: 'DARKNESS AT NOON',
    author: 'Arthur Koestler',
  },

  {
    id: 5,
    title: 'THE GRAPES OF WRATH',
    author: 'John Steinbeck',
  },

];

export const AddBook = (book) => ({
  type: ADDBOOK,
  payload: book,
});

export const delBook = (id) => ({
  type: DELETEBOOK,
  payload: id,
});

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK: return [
      ...state,
      action.payload,
    ];
    case DELETEBOOK:
      return state.filter((book) => book.id !== action.payload);

    default: return state;
  }
};

export default BookReducer;
