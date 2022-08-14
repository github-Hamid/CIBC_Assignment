import { transactionList } from '../state/transactions.state';
import { createReducer, on } from '@ngrx/store';
import {
  getTransactionListSuccess,
  transactionCommentChanged,
  statusChanged,
} from '../actions/tranaction.action';

export const transactionReducer = createReducer(
  transactionList,
  on(getTransactionListSuccess, (state, action) => {
    return {
      ...state,
      list: action.list,
      status: 'success',
    };
  }),
  on(transactionCommentChanged, (state, action) => {
    let newList = state.list.map((transaction) => {
      if (transaction.id === action.id) {
        return {
          id: transaction.id,
          date: transaction.date,
          comment: action.comment,
        };
      }
      return transaction;
    });

    return {
      ...state,
      list: newList,
    };
  }),
  on(statusChanged, (state, action) => {
    return { ...state, status: action.status };
  })
);
