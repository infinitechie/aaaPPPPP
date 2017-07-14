import {Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes} from '@angular/core';
// import {CalendarComponent} from "node_modules";

import { StaffService } from '../staff/service/staff.service';
import { StockService } from '../stock/service/stock.service';
import { Staff } from '../staff/model/staff';


@Component({
    moduleId: module.id,
    selector: 'staff-cmp',
    styleUrls: ['staff.component.css'],
    templateUrl: 'staff.component.html',
    animations: [
        trigger('calendar', [
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                    animate('0.3s 0s ease-out', style({opacity: 1,
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform':'translate3D(0px, 0px, 0px)',
                        transform:'translate3D(0px, 0px, 0px)',
                    }),)
                ])
        ])
    ]
})

export class StaffComponent implements OnInit {

    public staffArray: Staff[]  = [];
    public name: string;
    public unitsSold: string;
    public earnings: string;


    constructor(private staffService: StaffService,private stockService: StockService ) { }

    ngOnInit(){
        this.getUser();
        this.getUpdatedUser();
        this.name ="false";
        this.unitsSold ="false";
        this.earnings ="false";
 }


getUser(){
    this.staffArray = []
    this.staffService.grabUsersArray()
        .subscribe(staff => {
            console.log(staff);
            this.grabImageUrl(staff);
            this.staffArray.push(staff);
            console.log(this.staffArray);
            

        },
        err => {
            console.error("unable to add bug -", err);
        });
    }

          grabImageUrl(currentStock: Staff){
          
              
              this.stockService.stockStorageRef.child(currentStock.imageUrl).getDownloadURL().then(url => 
                    
                    // console.log(url)
                    currentStock.imageStorageRef = url
                    // stock.imageUrl = url
                    
                       
                    ).catch(function(error) {
                // Handle any errors
                console.log(error);
            });

                // this.getStock();
        // this.stockService.stockStorageRef.child(stock.imageUrl).getDownloadURL().then(function(url) {
        //         // `url` is the download URL for 'images/stars.jpg'
        //         console.log(url);

        //         this.imageSrc = url;

        //         // // This can be downloaded directly:
        //         // var xhr = new XMLHttpRequest();
        //         // xhr.responseType = 'blob';
        //         // xhr.onload = function(event) {
        //         //     var blob = xhr.response;
        //         // };
        //         // xhr.open('GET', url);
        //         // xhr.send();

        //         // var imgUsed = stock.imageUrl;
        //         // // Or inserted into an <img> element:
        //         // var imgs = document.getElementById('stockImage');
        //         // imgs.id = imgUsed;
        //         }).catch(function(error) {
        //         // Handle any errors
        //         console.log(error);
        //         });


    }





    getUpdatedUser() {
        this.staffService.changedListener()
            .subscribe(updatedUser => {
                const userIndex = this.staffArray.map(index => index.id).indexOf(updatedUser['id']);
                this.staffArray[userIndex] = updatedUser;
            },
            err => {
                console.error("Unable to get updated bug - ", err);
            });
    }



sortEarningsProperly(){
    if(this.earnings === "false") {
 this.staffArray.sort((a, b) => {
    //  var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.earnings = "true";
    if (a.earnings > b.earnings) return -1;
    else if (a.earnings < b.earnings) return 1;
    else return 0;
  });
    } else if (this.earnings === "true"){
        this.earnings = "false";
        this.staffArray.sort((a, b) => {
            // var first = a.name.toLowerCase(), second = b.name.toLowerCase();
    if (a.earnings < b.earnings) return -1;
    else if (a.earnings > b.earnings) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
}


sortNamesProperly(){
    if(this.name === "false") {
 this.staffArray.sort((a, b) => {
     var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.name = "true";
    if (first > second) return -1;
    else if (first < second) return 1;
    else return 0;
  });
    } else if (this.name === "true"){
        this.name = "false";
        this.staffArray.sort((a, b) => {
            var first = a.name.toLowerCase(), second = b.name.toLowerCase();
    if (first < second) return -1;
    else if (first > second) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
}


sortUnitsSold(){

      if(this.unitsSold === "false") {
 this.staffArray.sort((a, b) => {
    //  var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.unitsSold = "true";
    if (a.unitsSold > b.unitsSold) return -1;
    else if (a.unitsSold < b.unitsSold) return 1;
    else return 0;
  });
    } else if (this.unitsSold === "true"){
        this.unitsSold = "false";
        this.staffArray.sort((a, b) => {
            // var first = a.name.toLowerCase(), second = b.name.toLowerCase();
    if (a.unitsSold < b.unitsSold) return -1;
    else if (a.unitsSold > b.unitsSold) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
 

}











}

 
