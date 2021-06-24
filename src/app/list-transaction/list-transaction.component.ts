import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {

  transactions: Transaction[]

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.loadTransactions()
    this.transactions = this.transactionService.transactions
  }

}
