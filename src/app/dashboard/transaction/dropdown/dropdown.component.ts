import {Component,Input, Output,EventEmitter, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes,ChangeDetectorRef } from '@angular/core';

export class DropdownValue {
  value:string;
  label:string;

  constructor(value:string,label:string) {
    this.value = value;
    this.label = label;
  }
}

@Component({
  selector: 'dropdown',
  template: `
    <ul>
      <li *ngFor="let value of values" (click)="selectItem(value.value)">Last {{value}} weeks</li>
    </ul>
  `,
  styleUrls: ['dropdown.component.css']
})
export class DropdownComponent  implements OnInit {

    ngOnInit(){
        
}

  @Input()
  values: DropdownValue[];

  @Output()
  select: EventEmitter<string>;

  constructor() {
    this.select = new EventEmitter();
  }

  selectItem(value) {
    this.select.emit(value);
  }
}