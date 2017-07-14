import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
// import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
// import { RosterComponent } from './roster.component';

// import {MultiSelectModule, DropdownModule, SharedModule} from 'primeng/primeng';
// import { CalendarModule } from 'primeng/primeng';

// import {AccordionModule} from 'primeng/primeng'; 

import { RosterService } from './service/roster.service';
import 'jquery';
import 'moment';
import 'fullcalendar';

// import { ScheduleModule } from 'primeng/primeng';

@NgModule({
    imports: [ CoreModule, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [  ],
    exports: [  ],
    providers: [ RosterService]
    // ,
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RosterModule {
    

}