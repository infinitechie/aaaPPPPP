import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'staffPhoneNumber'
}) 
export class StaffPhoneNumberPipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(stockSold=> stockSold.phoneNumber.toLocaleLowerCase().indexOf(filter) != -1) : value; 
      }
       
    } 
}