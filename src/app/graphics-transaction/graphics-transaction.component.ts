import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-graphics-transaction',
  templateUrl: './graphics-transaction.component.html',
  styleUrls: ['./graphics-transaction.component.scss']
})
export class GraphicsTransactionComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  percentageIncomes: number
  percentageExpenses: number

  ngOnInit(): void {
    this.incrementGraphicIncomes()
  }

  incrementGraphicIncomes(): number{
    this.percentageIncomes = this.transactionService.incomes
    return 320
  }

  incrementGraphicExpenses(): number{
    this.percentageExpenses = this.transactionService.expenses
    return 200
  }

}
