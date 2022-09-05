class Person{
    constructor(personName,initialAmount,email,phoneNumber){
        this.personName=personName;
        this.initialAmount=initialAmount;
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
        allAccounts.push(this)
    }
    details(){
        console.log(this)                                   //Obtain data of the holder
    }
    balance(){
        let creationDate=this.dateOfCreation
        let currentDate=new Date()
        creationDate=creationDate.getFullYear()
        currentDate=currentDate.getFullYear()
        let difference=currentDate-creationDate
        if(difference>0){                                               //if difference is 1 or more years
            this.amount=this.amount+(this.amount*this.interest/365)     // add interest
        }
        return this.amount
    }
    depositBalance(){               //for deposit accounts
        this.amount=this.amount+(this.amount*this.interest/100*this.term)
        return this.amount
    }
}
let allAccounts=[]
let allAccountNumbers=[]

class CurrentAccountCaSa extends Person{
    constructor(personName,initialAmount,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
        this.interest=4;                        //interest is 4%
    }
    DepositCurrentAccount(money){                //Deposit money function
        this.amount=this.amount+money;
        let msg=`Credited Rs.${money}/-     Balance: Rs.${this.balance()}/-`
        this.statements.push(msg)
        console.log(msg)
    }
    WithdrawalCurrentAccount(money){   //Withdraw money function
        if(this.amount>=money){        //balance check
            this.amount=this.amount-money;
            let msg=`Debited Rs.${money}/-     Balance: Rs.${this.balance()}/-`
            this.statements.push(msg)
            console.log(msg)
        }
        else{                       //Not enough balance
            console.log("You have not enough amount in the account")
        }
    }
}

class SavingsAccountCaSa extends Person{
    constructor(personName,initialAmount,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
        this.interest=5                              //interest is 5%
    }
    DepositSavingsAccount(money){                //Deposit money function
        this.amount=this.amount+money;
        let msg=`Credited Rs.${money}/-     Balance: Rs.${this.balance()}/-`
        this.statements.push(msg)
        console.log(msg)
    }
    WithdrawalSavingsAccount(money){   //Withdrawal money function
        if(this.amount>=money+100){         // to ensure minimum balance of Rs.100/-
            this.amount=this.amount-money;
            let msg=`Debited Rs.${money}/-     Balance: Rs.${this.balance()}/-`
            this.statements.push(msg)
            console.log(msg)
        }
        else{                               //not enough minimum balance
            console.log("You do not have minimum amount in the account")
        }
    }
}

class FixedDepositAccount extends Person{
    constructor(personName,initialAmount,term,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
        this.interest=8                          //interest is 8%
        this.term=term
    }
    DepositFixedAccount(money){                //Deposit money function
        this.amount=this.amount+money;
        let msg=`Credited Rs.${money}/-     Balance: Rs.${this.depositBalance()}/-`
        this.statements.push(msg)
        console.log(msg)
    }
}

class RecurringDepositAccount extends Person{
    constructor(personName,initialAmount,term,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
        this.interest=7
        this.term=term
    }
    DepositRecurringAccount(money){                //Deposit money function
        this.amount=this.amount+money;
        let msg=`Credited Rs.${money}/-     Balance: Rs.${this.depositBalance()}/-`
        this.statements.push(msg)
        console.log(msg)
    }
}

class LoanAccount extends Person {
    constructor(personName,initialAmount,loanType,interest,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
        this.loanType=loanType          //type of loan
        this.interest=interest
    }
    depositLoan(money){
        if(this.amount>=money){
            this.amount=this.amount-money;
            let msg=`Deposited amount: Rs.${money}/-      Remaining amount to be paid: Rs.${this.balance()}/-`
            this.statements.push(msg)
            console.log(msg)
        }
        else if(this.amount==money){
            this.amount=0
            let msg=`Deposited amount: Rs.${this.amount}/-      Remaining amount to be paid: Rs.${this.balance()}/-`
            this.statements.push(msg)
            console.log(msg+"   Loan cleared.")
        }
        else{
            this.amount=Math.abs(this.amount-money)
            let msg=`Deposited amount: Rs.${this.amount}/-      Excess amount is credited to the account: Rs.${this.balance()}/-`
        }
    }
}



let Sumukh=new CurrentAccountCaSa("Sumukh",100,"Sumukh@xyz.com",789456123)  //Object creation
Sumukh.DepositCurrentAccount(200)
Sumukh.WithdrawalCurrentAccount(20)
Sumukh.WithdrawalCurrentAccount(2000)
Sumukh.details()

let Vineeth=new SavingsAccountCaSa("Vineeth",1000,"Vineeth@xyz.com",321654987)  //Object creation
Vineeth.DepositSavingsAccount(100)
Vineeth.WithdrawalSavingsAccount(900)
Vineeth.WithdrawalSavingsAccount(150)
Vineeth.details()

let Sandesh=new FixedDepositAccount("Sandesh",1000,2,"sandesh@xyz.com",1234567890)  //Object creation
Sandesh.DepositFixedAccount(200)
Sandesh.DepositFixedAccount(20)
Sandesh.details()

let Prasad=new RecurringDepositAccount("Prasad",10000,3,"Prasad@xyz.com",9876543210)  //Object creation
Prasad.DepositRecurringAccount(20)
Prasad.DepositRecurringAccount(200)
Prasad.details()

let Preetham=new LoanAccount("Preetham",10000,"house",11,"Preetham@xyz.com",9876543210)  //Object creation
Preetham.depositLoan(2000)
Preetham.details()

function AccountManager(){
    console.log(allAccounts)
}
AccountManager()