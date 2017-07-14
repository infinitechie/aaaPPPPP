import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'stockSold'
}) 
export class StockSoldPipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(stockSold=> stockSold.unitsSold.indexOf(filter) != -1) : value; 
      }
       
    } 
}