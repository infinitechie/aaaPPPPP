import {Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes, Input} from '@angular/core';

import { TransactionService } from '../transaction/service/transaction.service';

import { Transaction } from '../transaction/model/transaction';


import {SelectItem} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'transaction-cmp',
    templateUrl: 'transaction.component.html',
    styleUrls: ['transaction.component.css']
})

export class TransactionComponent implements OnInit {


    public dropdownValues: any[]=[];

    @Input() term;
    public idSort:string;
    public customerNameSort: string;
    public bookingNameSort: string;
    public cost: string;
    public bookingTypeSort: string;
    public customerEmailSort: string;
    public dateOfBooking: string;
    public transactions: Transaction[] = [];
    public copiedTransactions: Transaction[]  = [];
    constructor(private transactionService: TransactionService) { 
           this.cities = [];
        this.cities.push({label:'Last Week', value:1});
        this.cities.push({label:'Last 2 Weeks', value:2});
        this.cities.push({label:'Last 3 Weeks', value: 3});
        this.cities.push({label:'Last Month', value:4});
        this.cities.push({label:'Last 2 Months', value:8});
        this.cities.push({label:'Last 4 Months', value:12});
    }

      cities: SelectItem[];

    selectedCity: string;



    ngOnInit(){
        var date = new Date();
        var time = date.getTime()/1000;
        var oneWeek = 604800 * 1;
        var withinOneWeek = time - oneWeek;

        this.dropdownValues = [1,2,3,4,8,12];

        console.log(time);
        var timeFrame = String(withinOneWeek);
        console.log(timeFrame);
        this.getTransaction(timeFrame);
        // this.sortProperly();
        // this.getUpdatedUser();
        this.idSort = "false";
        this.customerNameSort = "false";
        this.bookingNameSort = "false";
        this.cost ="false";
        this.customerEmailSort ="false";
        this.bookingTypeSort ="false";
        this.dateOfBooking = "false";

        
        
 }

 onChange(weeks: any){
     console.log(weeks);
      var date = new Date();
        var time = date.getTime()/1000;
        var oneWeek = 604800 * Number(weeks);
        var withinOneWeek = time - oneWeek;
        var timeFrame = String(withinOneWeek);
        console.log(timeFrame);
        this.getTransaction(timeFrame);
    
 }


getTransaction(until: string){
    this.transactions = []
    this.transactionService.grabTransactionArray(until)
        .subscribe(transaction => {
            console.log(transaction);
            this.transactions.push(transaction);
            console.log(this.transactions);
            this.sortID();
        },
        err => {
            console.error("unable to add bug -", err);
        });

        
    }

// sortType(sort: string){
//     if(sort === 'name') {
//         this.transactions = this.copiedTransactions.sort(this.sortByCountryName)
//         console.log(this.transactions);
//     }
// }

// sortByCountryName(object1: Transaction, object2: Transaction){
// if(object1.name > object2.name) return 1

//     else if(object1.name === object2.name) return 0
    
//     else return -1

// }

sortCustomerNameProperly(){
    if (this.customerNameSort === "true"){
        console.log("HUPHUPPPPPP");
        // this.sortIDProperly();
        
    } else if (this.customerNameSort === "false"){
        console.log("JJJAJAJAJAJAJAJAJ");
        // this.sortIDProperlyReverse();

    } else {
        console.log("SDDSSDSDSD");
    }
    
}




sortID(){
     this.transactions.sort((a, b) => {
     this.idSort = "true";
    if (a.id > b.id) return -1;
    else if (a.id < b.id) return 1;
    else return 0;
  });
}





newTrans: Transaction;
public filteredTransaction: Transaction[] = [];




filter(){
    this.filteredTransaction = this.transactions.filter(
        fTransaction => fTransaction.customer === this.newTrans.name);
}

sort(){
    this.transactions
        .sort((a: Transaction, b: Transaction) => {
            return a.id.valueOf() - b.id.valueOf();
        })
       
}









// sortIDProperlyReverse(){
//     this.idSort = "true";
//     this.transactions.sort((a, b) => {
//     if (a.id < b.id) return -1;
//     else if (a.id > b.id) return 1;
//     else return 0;
//   });
  
// }

// sortId(){

//     if (this.idSort === "true"){
//         console.log("HUPHUPPPPPP");
//         this.sortIDProperly();
        
//     } else if (this.idSort === "false"){
//         console.log("JJJAJAJAJAJAJAJAJ");
//         this.sortIDProperlyReverse();

//     } else {
//         console.log("SDDSSDSDSD");
//     }
    
// }
    // getUpdatedUser() {
    //     this.customerService.changedListener()
    //         .subscribe(updatedUser => {
    //             const userIndex = this.users.map(index => index.id).indexOf(updatedUser['id']);
    //             this.users[userIndex] = updatedUser;
    //         },
    //         err => {
    //             console.error("Unable to get updated bug - ", err);
    //         });
    // }


    sortIDProperly(){
    if(this.idSort === "false") {
 this.transactions.sort((a, b) => {
     this.idSort = "true";
    if (a.id > b.id) return -1;
    else if (a.id < b.id) return 1;
    else return 0;
  });
    } else if (this.idSort === "true"){
        this.idSort = "false";
        this.transactions.sort((a, b) => {
    if (a.id < b.id) return -1;
    else if (a.id > b.id) return 1;
    else return 0;
  });
    } else { 
        console.log("davie")
    }
}

sortBookingType(){
       if(this.bookingTypeSort === "false") {
 this.transactions.sort((a, b) => {
     var first = a.serviceType.toLowerCase(), second = b.serviceType.toLowerCase();
     this.bookingTypeSort = "true";
    if (first> second) return -1;
    else if (first < second) return 1;
    else return 0;
  });
    } else if (this.bookingTypeSort === "true"){
        this.bookingTypeSort = "false";
        this.transactions.sort((a, b) => {
            var first = a.serviceType.toLowerCase(), second = b.serviceType.toLowerCase();
    if (first < second) return -1;
    else if (first > second) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
}


sortCustomerNames(){

         if(this.customerNameSort === "false") {
 this.transactions.sort((a, b) => {
     var first = a.customer.toLowerCase(), second = b.customer.toLowerCase();
     this.customerNameSort = "true";
    if (first> second) return -1;
    else if (first < second) return 1;
    else return 0;
  });
    } else if (this.customerNameSort === "true"){
        this.customerNameSort = "false";
        this.transactions.sort((a, b) => {
            var first = a.customer.toLowerCase(), second = b.customer.toLowerCase();
    if (first < second) return -1;
    else if (first > second) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }

    

}

sortBookingTypeProperly(){
     if(this.customerNameSort === "false") {
 this.transactions.sort((a, b) => {
     this.customerNameSort = "true";
    if (a.date > b.date) return -1;
    else if (a.date < b.date) return 1;
    else return 0;
  });
    } else if (this.customerNameSort === "true"){
        this.customerNameSort = "false";
        this.transactions.sort((a, b) => {
    if (a.date < b.date) return -1;
    else if (a.date > b.date) return 1;
    else return 0;
  });
    } else { 
        console.log("davie")
    }

    console.log(this.transactions);
}



sortCostProperly() {

      if(this.cost === "false") {
 this.transactions.sort((a, b) => {
     this.cost = "true";
    if (a.cost > b.cost) return -1;
    else if (a.cost < b.cost) return 1;
    else return 0;
  });
    } else if (this.cost === "true"){
        this.cost = "false";
        this.transactions.sort((a, b) => {
    if (a.cost < b.cost) return -1;
    else if (a.cost > b.cost) return 1;
    else return 0;
  });
    } else { 
        console.log("davie")
    }

    console.log(this.transactions);

}

sortNameOfService(){

            if(this.bookingNameSort === "false") {
 this.transactions.sort((a, b) => {
     var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.bookingNameSort = "true";
    if (first> second) return -1;
    else if (first < second) return 1;
    else return 0;
  });
    } else if (this.bookingNameSort === "true"){
        this.bookingNameSort = "false";
        this.transactions.sort((a, b) => {
            var first = a.name.toLowerCase(), second = b.name.toLowerCase();
    if (first < second) return -1;
    else if (first > second) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }

}

}

 
