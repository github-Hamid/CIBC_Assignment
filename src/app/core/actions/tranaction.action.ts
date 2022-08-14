import { createAction, props } from '@ngrx/store';

export const getAllTransactions = createAction('[Transactions] Get list');

export const getTransactionListSuccess = createAction(
  '[Transactions] get list succeeded',
  props<{ list: any }>()
);

export const transactionCommentChanged = createAction(
  '[Transactions] comment changed',
  props<{ comment: string; id: number }>()
);

export const statusChanged = createAction(
  '[Transactions] status changed',
  props<{ status: string }>()
);
