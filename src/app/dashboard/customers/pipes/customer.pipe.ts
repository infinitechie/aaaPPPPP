import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
    name: 'customerNames'
}) 
export class CustomerNamePipe implements PipeTransform {
    transform(value: any[], args: Object): any {
      if (!value || !args ) {

        return value

      } else {
         let filter = args
       return filter ? value.filter(customer=> customer.name.toLocaleLowerCase().indexOf(filter) != -1) : value; 
      }
       
    } 
}

