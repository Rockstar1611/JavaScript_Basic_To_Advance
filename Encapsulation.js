class BankAccount{
  constructor(accNumber,accHoldername,ballance){
    this.accNum=accNumber;
    this.accHoldername=accHoldername;
    this.balance=ballance;
  }
  showAccountDetails(){
    console.log("Account Number: "+this.accNum);
    console.log("Account Holdername: "+this.accHoldername);
    console.log("Ballance: "+this.balance);
  }
}
let myBanckAccount=new BankAccount("65432","Ramesh",150000);
myBanckAccount.showAccountDetails();