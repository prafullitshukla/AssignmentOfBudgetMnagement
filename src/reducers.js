import {ADD_EXPENSE} from './actions';

const initialState = {
  expenses: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

export default Reducer;
