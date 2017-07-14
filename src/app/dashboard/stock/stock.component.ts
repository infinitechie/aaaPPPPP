import {Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes} from '@angular/core';

import { StockService } from '../stock/service/stock.service';

import { Stock } from '../stock/model/stock';
import { Transaction } from '../transaction/model/transaction';

import { TransactionService } from '../transaction/service/transaction.service';


import { UploadImageService } from '../uploadImages/service/uploadImages.service';
import { Upload } from '../uploadImages/model/upload';
import * as _ from "lodash";


@Component({
    moduleId: module.id,
    selector: 'stock-cmp',
    styleUrls: ['stock.component.css'],
    templateUrl: 'stock.component.html',
    animations: [
        trigger('cardtypography', [
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

export class StockComponent{
    
       public stockArray: Stock[]  = [];

       public imageSrc: string;

       public imageArray: String[] = [];
       public transactions: Transaction[] = [];

       public productName: string;
       public unitsSold: string;
       public productCost: string;
       public currentStock: string;
       public dateEntered: string;


        selectedFiles: FileList;
        currentUpload: Upload;

    constructor(private stockService: StockService, private upSvc: UploadImageService, private transactionSvc: TransactionService) { }

    ngOnInit(){
        this.getStock();

        this.productName= "false";
        this.unitsSold = "false";
       this.productCost = "false";
       this.currentStock = "false";
       this.dateEntered = "false";
 }



getStock(){
    this.stockArray = []
    
    this.stockService.grabStockArray()
        .subscribe(stock => {
            console.log(stock);
            // this.setImage(stock);
            // this.imageSrc = null;
            this.grabImageUrl(stock);
            this.stockArray.push(stock);
            // this.imageArray.push(stock.imageUrl);


            


            console.log(this.stockArray);
            

        },
        err => {
            console.error("unable to add bug -", err);
        });
    }

      grabImageUrl(currentStock: Stock){
          
              
              this.stockService.stockStorageRef.child(currentStock.imageUrl).getDownloadURL().then(url => 
                    
                    // console.log(url)
                    currentStock.imageStorageRef = url
                    // stock.imageUrl = url
                    
                       
                    ).catch(function(error) {
                // Handle any errors
                console.log(error);
                });


    }

sortProductNames() {
      if(this.productName === "false") {
 this.stockArray.sort((a, b) => {
     var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.productName = "true";
    if (first > second) return -1;
    else if (first < second) return 1;
    else return 0;
  });
    } else if (this.productName === "true"){
        this.productName = "false";
        this.stockArray.sort((a, b) => {
            var first = a.name.toLowerCase(), second = b.name.toLowerCase();
    if (first < second) return -1;
    else if (first > second) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
 

}




sortCurrentStock() {
      if(this.currentStock === "false") {
 this.stockArray.sort((a, b) => {
    //  var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.currentStock = "true";
    if (a.currentStock > b.currentStock) return -1;
    else if (a.currentStock < b.currentStock) return 1;
    else return 0;
  });
    } else if (this.currentStock === "true"){
        this.currentStock = "false";
        this.stockArray.sort((a, b) => {
            // var first = a.name.toLowerCase(), second = b.name.toLowerCase();
    if (a.currentStock < b.currentStock) return -1;
    else if (a.currentStock > b.currentStock) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
 

}

   sortCost(){

      if(this.productCost === "false") {
 this.stockArray.sort((a, b) => {
    //  var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.productCost = "true";
    if (a.cost > b.cost) return -1;
    else if (a.cost < b.cost) return 1;
    else return 0;
  });
    } else if (this.productCost === "true"){
        this.productCost = "false";
        this.stockArray.sort((a, b) => {
            // var first = a.name.toLowerCase(), second = b.name.toLowerCase();
    if (a.cost < b.cost) return -1;
    else if (a.cost > b.cost) return 1;
    else return 0;
  });
    } else { 
        console.log("davie");
    }
 

}

    sortUnitsSold(){

      if(this.unitsSold === "false") {
 this.stockArray.sort((a, b) => {
    //  var first = a.name.toLowerCase(), second = b.name.toLowerCase();
     this.unitsSold = "true";
    if (a.unitsSold > b.unitsSold) return -1;
    else if (a.unitsSold < b.unitsSold) return 1;
    else return 0;
  });
    } else if (this.unitsSold === "true"){
        this.unitsSold = "false";
        this.stockArray.sort((a, b) => {
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
