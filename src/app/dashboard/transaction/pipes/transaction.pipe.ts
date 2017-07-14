import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'TransactionCustomerName'
}) 
export class TransactionCustomerNamePipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(transaction=> transaction.customer.toLocaleLowerCase().indexOf(filter) != -1) : value; 
      }
       
    } 
}

