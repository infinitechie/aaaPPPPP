import { Component, OnInit, trigger,transition,style,animate,group,state } from '@angular/core';

import { CustomerService } from '../customers/service/customers.service';
import { Customers } from '../customers/model/customers';


@Component({
    moduleId: module.id,
    styleUrls: ['customers.component.css'],
    selector: 'customers-cmp',
    templateUrl: 'customers.component.html',
    animations: [
        trigger('cardicons', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0s ease-out')
                ])
        ])
    ]
})

export class CustomersComponent implements OnInit {

    public users: Customers[]  = [];
    public nameSort: string;
    public expenditureSort: string;
    public emailSort: string;
    public creditsSort: string;
    public hasApp: string;
    constructor(private customerService: CustomerService) { }

    ngOnInit(){
        this.getUser();
        this.getUpdatedUser();
        this.nameSort = "false";
        this.expenditureSort = "false";
        this.emailSort = "false";
        this.creditsSort = "false";
        this.hasApp= "false";
 }


getUser(){
    this.users = []
    this.customerService.grabUsersArray()
        .subscribe(user => {
            console.log(user);
            this.users.push(user);
            console.log(this.users);

        },
        err => {
            console.error("unable to add bug -", err);
        });
    }



sortCreditProperly(){
    if(this.creditsSort === "false") {
 this.users.sort((a, b) => {
    //  var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.creditsSort = "true";
    if (a.credit > b.credit) return -1;
    else if (a.credit < b.credit) return 1;
    else return 0;
  });
    } else if (this.creditsSort === "true"){
        this.creditsSort = "false";
        this.users.sort((a, b) => {
            // var first = a.name.toLowerCase(), second = b.name.toLowerCase();
    if (a.credit < b.credit) return -1;
    else if (a.credit > b.credit) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
}

sortExpenditureProperly(){
    if(this.expenditureSort === "false") {
 this.users.sort((a, b) => {
    //  var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.expenditureSort = "true";
    if (a.expenditure > b.expenditure) return -1;
    else if (a.expenditure < b.expenditure) return 1;
    else return 0;
  });
    } else if (this.expenditureSort === "true"){
        this.expenditureSort = "false";
        this.users.sort((a, b) => {
            // var first = a.name.toLowerCase(), second = b.name.toLowerCase();
    if (a.expenditure < b.expenditure) return -1;
    else if (a.expenditure > b.expenditure) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
}


sortHasAppProperly(){
    if(this.hasApp === "false") {
 this.users.sort((a, b) => {
     var first = a.hasApp.toLowerCase(), second = b.hasApp.toLowerCase();
     this.hasApp = "true";
    if (first > second) return -1;
    else if (first < second) return 1;
    else return 0;
  });
    } else if (this.hasApp === "true"){
        this.hasApp = "false";
        this.users.sort((a, b) => {
            var first = a.hasApp.toLowerCase(), second = b.hasApp.toLowerCase();
    if (first < second) return -1;
    else if (first > second) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
}


sortNamesProperly(){
    if(this.nameSort === "false") {
 this.users.sort((a, b) => {
     var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.nameSort = "true";
    if (first > second) return -1;
    else if (first < second) return 1;
    else return 0;
  });
    } else if (this.nameSort === "true"){
        this.nameSort = "false";
        this.users.sort((a, b) => {
            var first = a.name.toLowerCase(), second = b.name.toLowerCase();
    if (first < second) return -1;
    else if (first > second) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
}



sortEmailsProperly(){
    if(this.emailSort === "false") {
 this.users.sort((a, b) => {
     var first = a.email.toLowerCase(), second = b.email.toLowerCase();
     this.emailSort = "true";
    if (first > second) return -1;
    else if (first < second) return 1;
    else return 0;
  });
    } else if (this.emailSort === "true"){
        this.emailSort = "false";
        this.users.sort((a, b) => {
            var first = a.email.toLowerCase(), second = b.email.toLowerCase();
    if (first < second) return -1;
    else if (first > second) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
}

    getUpdatedUser() {
        this.customerService.changedListener()
            .subscribe(updatedUser => {
                const userIndex = this.users.map(index => index.id).indexOf(updatedUser['id']);
                this.users[userIndex] = updatedUser;
            },
            err => {
                console.error("Unable to get updated bug - ", err);
            });
    }
}

 