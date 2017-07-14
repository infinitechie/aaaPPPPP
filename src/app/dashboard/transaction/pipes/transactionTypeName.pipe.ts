import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'TransactionTypeName'
}) 
export class TransactionTypeNamePipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(transaction=> transaction.name.toLocaleLowerCase().indexOf(filter) != -1) : value; 
      }
       
    } 
}
