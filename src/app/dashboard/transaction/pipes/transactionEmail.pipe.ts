import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'TransactionCustomerEmail'
}) 
export class TransactionCustomerEmailPipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(transaction=> transaction.customerId.toLocaleLowerCase().indexOf(filter) != -1) : value; 
      }
       
    } 
}

