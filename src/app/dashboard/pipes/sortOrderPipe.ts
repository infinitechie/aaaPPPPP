import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'movieFilter'
}) 
export class MovieFilterPipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(movie=> movie.date.toLocaleLowerCase().indexOf(filter) != -1) : value; 
      }
       
    } 
}
















// import { Pipe, PipeTransform } from "@angular/core";
// import { Transaction } from "../transaction/model/transaction";
// import { TransactionComponent } from "../transaction/transaction.component";

// @Pipe({
//   name: 'sort'
// })
// export class ArraySortPipe implements PipeTransform {
//   transform(transactions: any, term: any): any {
//       if(term == "") return transactions;

//       return transactions.filter(function(filteredItem){
//           return filteredItem.customer.toLowerCase().includes(term.toLowerCase());
//       })
  
// }

// }






















// import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//   name: "sort"
// })
// export class ArraySortPipe implements PipeTransform {
//   transform(array: Array<any>): Array<string> {
//    array.sort((a: any, b: any) => {
//         if (a[args] < b.data.likes[args] ){
//         a is the Object and args is the orderBy condition (data.likes.count in this case)
//             return -1;
//         }else if( a[args] > b.data.likes[args] ){
//             return 1;
//         }else{
//             return 0;
//         }
//     });
//     return array;
//   }
// }