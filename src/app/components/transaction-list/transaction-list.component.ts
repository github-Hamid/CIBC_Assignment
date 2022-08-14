import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/core/services/transaction.service';
import Transaction from 'src/app/models/transaction';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  // transactionList$: Observable<any> | undefined;
  list: any;
  constructor(private store: Store<{ transaction: Transaction }>) {}

  ngOnInit(): void {
    // getting transactions list
    this.store.select('transaction').subscribe((data) => {
      if (data) {
        this.list = data.list;
      }
    });
  }
}
