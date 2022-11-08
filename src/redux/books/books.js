const Add = 'Add';
const Delete = 'Delete';

const initialState = []

export const AddBook = (book) => ({
  type: Add,
  book
})

export const delBook = (book) => ({
  type: Delete,
  book
})

const BookReducer = (state = initialState, action) => {
   switch(action.type) {
    case Add: return [
      ...state,
      action.payload,
    ];
    case Delete: return [
      ...state.filter((each) => each.id !== action.payload.id),
    ];
    default: return state;
  }
};

export default BookReducer;
