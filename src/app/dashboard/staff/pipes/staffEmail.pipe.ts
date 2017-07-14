import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'staffEmail'
}) 
export class StaffEmailPipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(stockSold=> stockSold.email.toLocaleLowerCase().indexOf(filter) != -1) : value; 
      }
       
    } 
}