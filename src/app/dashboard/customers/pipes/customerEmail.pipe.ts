import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'customerEmail'
}) 
export class CustomerEmailPipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(customer=> customer.email.toLocaleLowerCase().indexOf(filter) != -1) : value; 
      }
       
    } 
}

