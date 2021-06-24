import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions: Transaction[]

  incomes: number = 0
  expenses: number = 0

  constructor() { 
    this.transactions = []
  }

  saveTransaction(transaction: Transaction){
    
    this.transactions.push(transaction)
    this.saveLocal()

    if (transaction.transactionType == '🔴 despesa') {
      this.expenses = this.expenses.valueOf() + transaction.transactionValue.valueOf()*(-1)
      this.saveTotals()
    }else if (transaction.transactionType == '🟢 receita'){
      this.incomes = this.incomes.valueOf() + transaction.transactionValue.valueOf()
      this.saveTotals()
    }
  }

  //Process of saving and retrieving transaction informations
  saveLocal(){
    const data = JSON.stringify(this.transactions)
    localStorage.setItem('transactions', data)
  }

  loadTransactions(){
    const data = localStorage.getItem('transactions')
    this.transactions = JSON.parse(data)
  }

  //Process of saving and retrieving the values of incomes(receitas) and expenses(despesas)
  saveTotals(){
    localStorage.setItem('incomes', String(this.incomes))
    localStorage.setItem('expenses', String(this.expenses))
  }

  loadTotals(){
    this.incomes = Number(localStorage.getItem('incomes'))
    this.incomes = Number(localStorage.getItem('incomes'))
  }
}
