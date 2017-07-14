import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'stockName'
}) 
export class StockNamePipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(stockSold=> stockSold.name.toLocaleLowerCase().indexOf(filter) != -1) : value; 
      }
       
    } 
}