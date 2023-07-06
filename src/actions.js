// Action types
export const ADD_EXPENSE = 'ADD_EXPENSE';

// Action creators
export const addExpense = (item, plannedAmount, actualAmount) => ({
  type: ADD_EXPENSE,
  payload: {item, plannedAmount, actualAmount},
});
