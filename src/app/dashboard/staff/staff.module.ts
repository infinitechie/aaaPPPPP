import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { AngularFireModule } from 'angularfire2';

import { ViewDetailsComponent } from './viewDetails/viewDetails.component';

//Components
// import { CustomerEditComponent } from '../customers/customerEdit/customerEdit.component';
// import { DeleteUserConfirm } from '../customers/deleteUserConfirm/deleteUserConfirm.component';

// import { HomePageComponent } from '../../homePage/homePage.component';
import { FirebaseConfigService } from '../../core/services/firebase-config.service';

// Services
import { StaffService } from '../staff/service/staff.service';

import {StaffPhoneNumberPipe} from "./pipes/staffNumber.pipe";
import {StaffNamePipe} from "./pipes/staffName.pipe";
import {StaffEmailPipe} from "./pipes/staffEmail.pipe";


@NgModule ({ 

    imports: [CoreModule, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [ ViewDetailsComponent, StaffPhoneNumberPipe, StaffNamePipe, StaffEmailPipe ],
    exports: [ ViewDetailsComponent, StaffPhoneNumberPipe, StaffNamePipe, StaffEmailPipe ],
    providers: [ StaffService, FirebaseConfigService ]


})

export class StaffModule { }