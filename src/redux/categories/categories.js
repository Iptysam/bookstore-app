const CHECKSTATUS = 'bookstore-app/categories/CHECKSTATUS';

const initialState = [];

export const CheckStatus = (category) => ({
  type: CHECKSTATUS,
  category,
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under Construction';

    default: return state;
  }
};

export default categoryReducer;
