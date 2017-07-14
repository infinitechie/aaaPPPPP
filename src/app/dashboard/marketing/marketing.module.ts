import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { BookingCashOutComponent } from './bookingCashOut/bookingCashOut.component';
// import {AutoCompleteModule, SharedModule, DropdownModule} from 'primeng/primeng';

import { FirebaseConfigService } from '../../core/services/firebase-config.service';

// Services
import { MarketingService } from './service/marketing.service';

// import {BookingSharedService} from './bookingSharedService';

// import {CapitalizePipes} from "./pipes/capitalize.pipe";


@NgModule ({ 

    imports: [CoreModule, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [  ],
    exports: [  ],
    providers: [  FirebaseConfigService, MarketingService ]


})

export class MarketingModule { }