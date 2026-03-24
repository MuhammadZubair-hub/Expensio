import { createSlice } from "@reduxjs/toolkit";

export interface ExpenseType {
  // id: uuidv4(),
  id: string,
  title: string,
  amount: Number,
  date: Date,
}

interface intailState {
   budget: Number,
  expenses: ExpenseType[] ,
}

const initialState :intailState = {
  budget: 0,
  expenses: [] ,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setBudget: (state, action) => {
      state.budget = action.payload;
    },

    addExpense: (state, action) => {
      console.log(' the add aexepense payload is :', action.payload);
      state.expenses.push(action.payload);
    },

    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const { setBudget, addExpense, deleteExpense } = expenseSlice.actions;
export const getExpenses = (state: { expense: intailState }) => state.expense?.expenses || [];
export default expenseSlice.reducer;