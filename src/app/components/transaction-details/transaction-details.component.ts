import { TransactionItems } from './../../models/transaction';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import Transaction from 'src/app/models/transaction';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/core/services/transaction.service';
import { transactionCommentChanged } from 'src/app/core/actions/tranaction.action';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
})
export class TransactionDetailsComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  transaction: any;

  constructor(
    private store: Store<{ transaction: Transaction }>,
    private route: ActivatedRoute,
    private transactionManager: TransactionService,
    private router: Router
  ) {}

  // handling comment changes
  commentChangeHandler(data: any) {
    this.store.dispatch(transactionCommentChanged(data));
  }

  // back button clicked
  backBtnClicked() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.store.select('transaction').subscribe((value) => {
      // getting transaction with specified id
      let detailedTransaction = value.list.filter(
        (transaction) => transaction.id === Number(this.id)
      );

      if (detailedTransaction) {
        //assigning transaction values
        this.transaction = {
          id: detailedTransaction[0].id,
          date: detailedTransaction[0].date,
          comment: detailedTransaction[0].comment,
        };
      }
    });
  }
}
