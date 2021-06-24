import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  newTransaction: Transaction

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.newTransaction = new Transaction()
  }

  saveTransaction(form){
    if (this.newTransaction.transactionType == '🔴 despesa') {
      this.newTransaction.transactionValue = this.newTransaction.transactionValue * (-1)
      console.log(this.transactionService.expenses)
    }
    
    this.transactionService.saveTransaction(this.newTransaction)
    this.newTransaction = new Transaction()
    form.reset()
  }
  
}
