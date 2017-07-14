import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'stockCost'
}) 
export class StockCostPipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(stockSold=> stockSold.cost.indexOf(filter) != -1) : value; 
      }
       
    } 
}