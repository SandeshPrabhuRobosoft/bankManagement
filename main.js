class Person{
    constructor(personName,initialAmount,email,phoneNumber){
        this.personName=personName;
        this.amount=initialAmount;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.accountType
        this.dateOfCreation=new Date()
        this.dateOfCreation.setYear(2020)
        this.accountNumber=Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) + 1000000000000;             //creating 13 digit account number
        while(allAccountNumbers.indexOf(this.accountNumber)!= -1){                                                      //Checking uniqueness of account number
            this.accountNumber=Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) + 1000000000000;
        }
        allAccountNumbers.push(this.accountNumber);
        this.statements=[]
    }
    details(){
        console.log(this)           //Obtain data of the holder
    }
}

let allAccountNumbers=[]

// let person1=new Person("Sandesh",1000,"sandesh@xyz.com",1234567890) //Creating a person
// person1.details()

class CurrentAccountCaSa extends Person{
    constructor(personName,initialAmount,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
        this.interest=3;
    }
    DepositCurrentAccount(money){                //Deposit money function
        this.amount=this.amount+money;
        let msg=`Credited Rs.${money}/-     Balance: Rs.${this.amount}/-`
        this.statements.push[msg]
        console.log(msg)
    }
    WithdrawalCurrentAccount(money){   //Deposit money function
        if(this.amount>=money){
            this.amount=this.amount-money;
            let msg=`Debited Rs.${money}/-     Balance: Rs.${this.amount}/-`
            this.statements.push[msg]
            console.log(msg)
        }
        else{
            console.log("You have not enough amount in the account")
            console.log(`Current amount in ${this.personName}'s current account: ${this.amount}`)
        }
    }
    balance(){
        let creationDate=this.dateOfCreation
        let currentDate=new Date()
        creationDate=creationDate.getFullYear()
        console.log(creationDate)
        currentDate=currentDate.getFullYear()
        console.log(currentDate)
        let difference=currentDate-creationDate
        if(difference>0){
            this.amount=this.amount+(this.amount*this.interest/365)
        }
        console.log(this.amount)
    }
}
class SavingsAccountCaSa extends Person{
    constructor(personName,initialAmount,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
        interest=4
    }
    DepositSavingsAccount(money){                //Deposit money function
        this.amount=this.amount+money;
        let msg=`Credited Rs.${money}/-     Balance: Rs.${this.amount}/-`
        this.statements.push[msg]
        console.log(msg)
    }
    WithdrawalSavingsAccount(money){   //Deposit money function
        if(this.amount<=money+100){         // to ensure minimum balance of Rs.100/-
            this.amount=this.amount-money;
            console.log(`Current amount in ${this.personName}'s savings account: ${this.amount}`)
        }
        else{
            console.log("You do not have minimum amount in the account")
            console.log(`Current amount in ${this.personName}'s savings account: ${this.amount}`)
        }
    }
}
class FixedDepositAccount extends Person{
    constructor(personName,initialAmount,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
        interest=8
    }
    DepositFixedAccount(money){                //Deposit money function
        this.amount=this.amount+money;
        console.log(`Current amount in ${this.personName}'s Fixed account: ${this.amount}`)
    }
}
class RecurringDepositAccount extends Person{
    constructor(personName,initialAmount,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
        interest=7
    }
    DepositRecurringAccount(money){                //Deposit money function
        this.amount=this.amount+money;
        console.log(`Current amount in ${this.personName}'s Recurring account: ${this.amount}`)
    }
}

class LoanAccount extends Person {
    constructor(personName,initialAmount,email,phoneNumber,loanType){
        super(personName,initialAmount,email,phoneNumber)
        this.loanType=loanType
        this.interest=10 
    }
    depositLoan(money){
        if(this.type=="House"){
            this.amount=this.amount-money;
            console.log(`Deposited amount: Rs.${this.amount}/-      Remaining amount to be paid: Rs.${this.amount}/-`)
        }
    }
}
// function calculateInterest(accountType,difference,person){
//     if(accountType!="deposit"){
//         person.amount=person.amount+(person.amount*person.interest/365)
//     }
//     return person.amount;
// }
let sandeshCaSa=new CurrentAccountCaSa("Sandesh",1000,"sandesh@xyz.com",1234567890)  //Object creation
sandeshCaSa.WithdrawalCurrentAccount(20)            //deposit cash
console.log(sandeshCaSa.balance())













// balance(){
//     let creationDate=this.dateOfCreation
//     let currentDate=new Date()
//     creationDate=creationDate.getFullYear()
//     console.log(creationDate)
//     currentDate=currentDate.getFullYear()
//     console.log(currentDate)
//     let difference=currentDate-creationDate
//     if(difference>0){
//         this.amount=this.amount+(this.amount*this.interest/365)
//     }
//     console.log(this.amount)
// }