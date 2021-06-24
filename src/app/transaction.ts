export class Transaction{
    
    transactionId: number
    transactionType: string
    transactionDesc: string
    paymentDate: string
    transactionValue: number

    constructor(){
        this.transactionId = (new Date()).getTime()
    }
}