import {
  getAllTransactions,
  getTransactionListSuccess,
  // getDetailedTransaction,
} from '../actions/tranaction.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { TransactionItems } from 'src/app/models/transaction';
@Injectable()
export class TransactionEffect {
  constructor(
    private transactionManager: TransactionService,
    private action$: Actions
  ) {}

  getTransactionList$ = createEffect(() => {
    return this.action$.pipe(
      ofType(getAllTransactions),
      exhaustMap((action) => {
        return this.transactionManager.getAllTransactions().pipe(
          map((data) => {
            return getTransactionListSuccess({ list: data.transactions });
          })
        );
      })
    );
  });
}
