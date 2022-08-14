import { TransactionItems } from 'src/app/models/transaction';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() type = '';
  @Output() commentChangedEventEmitter = new EventEmitter<object>();

  //showing save button
  commentChanged(eve: any) {
    let div = document.getElementById('saveBtnContainer');
    if (div?.classList.contains('hidden')) {
      div?.classList.remove('hidden');
      div?.classList.add('visible');
    }
  }

  // emitting event on clicking save button
  saveButtonClicked() {
    this.commentChangedEventEmitter.emit({
      id: this.data.id,
      comment: this.data.comment,
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
