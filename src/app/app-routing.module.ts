import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
const routes: Routes = [
  { path: '', component: TransactionListComponent },
  { path: 'transaction-details/:id', component: TransactionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
