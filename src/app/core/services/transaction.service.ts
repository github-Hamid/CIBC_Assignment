import { TransactionItems } from './../../models/transaction';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private json_url = 'assets/db.json';

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<any> {
    return this.http.get(this.json_url);
  }
}
