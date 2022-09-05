class Person{
    constructor(personName,initialAmount,email,phoneNumber){
        this.personName=personName;
        this.amount=initialAmount;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.accountType
        this.dateOfCreation=new Date()
        this.accountNumber=Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) + 1000000000000;             //creating 13 digit account number
        while(allAccountNumbers.indexOf(this.accountNumber)!= -1){                                                      //Checking uniqueness of account number
            this.accountNumber=Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) + 1000000000000;
        }
        allAccountNumbers.push(this.accountNumber);
        
    }
    
    details(){
        console.log(this)           //Obtain data of the holder
    }
}

let allAccountNumbers=[]

// let person1=new Person("Sandesh",1000,"sandesh@xyz.com",1234567890) //Creating a person
// person1.details()

class CaSa extends Person {
    constructor(personName,initialAmount,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
    }
}
class DepositCaSa extends CaSa{
    constructor(personName,initialAmount,email,phoneNumber){
        this.interest=0.03;
        super(personName,initialAmount,email,phoneNumber)
    }
    DepositMoneyCaSa(money){                //Deposite money function
        this.amount=this.amount+money;
        console.log(`Current amount in ${this.personName}'s account: ${this.amount}`)
    }
}
class WithdrawalCaSa extends CaSa{
    constructor(personName,initialAmount,email,phoneNumber){
        super(personName,initialAmount,email,phoneNumber)
        this.interest=0.04;
    }
    WithdrawalMoneyCaSa(money){   //Deposite money function
        this.amount=this.amount+money;
        console.log(`Current amount in ${this.personName}'s account: ${this.amount}`)
    }
    balance(){
        let creationDate=this.dateOfCreation
        let currentDate=new Date()
        creationDate=creationDate.getFullYear()
        currentDate=currentDate.getFullYear()
        let difference=currentDate-creationDate
        let interest=0
        if(difference>0){
            interest=calculateInterest("Withdrawal",difference,this)
        }
    }
}
calculateInterest(accountType,difference,person){
    if(accountType!="deposit"){
        this.amount=this.amount*(this.amount*this.interest/365)
    }
}
let sandeshCaSa=new WithdrawalCaSa("Sandesh",1000,"sandesh@xyz.com",1234567890)  //Object creation
sandeshCaSa.WithdrawalMoneyCaSa(20)            //deposit cash
sandeshCaSa.details()       //print Data of the person
console.log(sandeshCaSa.interest)
//loan 1month