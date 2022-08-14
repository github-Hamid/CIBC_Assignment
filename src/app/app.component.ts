import { LoadingComponent } from './components/loading/loading.component';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getAllTransactions,
  statusChanged,
} from 'src/app/core/actions/tranaction.action';
import { TransactionService } from 'src/app/core/services/transaction.service';
import Transaction from 'src/app/models/transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CIBC_assignment';
  status = '';
  constructor(
    private transactionManager: TransactionService,
    private store: Store<{ transaction: Transaction }>
  ) {}
  ngOnInit(): void {
    this.store.select('transaction').subscribe((data) => {
      this.status = data.status;
    });

    // just for simulating loading time for retrieving data from server side
    this.store.dispatch(statusChanged({ status: 'loading' }));
    setTimeout(() => {
      this.store.dispatch(getAllTransactions());
    }, 2000);
  }
}
