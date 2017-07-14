import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'customerPhoneNumber'
}) 
export class CustomerPhoneNumberPipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(customer=> customer.phoneNumber.toLocaleLowerCase().indexOf(filter) != -1) : value; 
      }
       
    } 
}

