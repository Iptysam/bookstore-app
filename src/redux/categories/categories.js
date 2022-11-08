const ADDSTATUS = 'ADDSTATUS';
const REMOVESTATUS = 'REMOVESTATUS';

const initialState = [];

export const addcategory = (category) => ({
    type: ADDSTATUS,
    category
})

export const delcategory = (category) => ({
    type: REMOVESTATUS,
    category
})

const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADDSTATUS: return [
            ...state, action.payload,
        ];

        case REMOVESTATUS: return [
            ...state.filter((each) => each.id !== action.payload.id),
        ];

        default: return [
            {
                text: 'Under Construction',
            }

        ];
    }
}

export default categoryReducer;