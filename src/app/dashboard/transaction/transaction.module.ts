import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { ArraySortPipe } from "../../dashboard/pipes/sortOrderPipe"; 

//Components
import { TransactionPrintComponent } from '../transaction/transactionPrint/transactionPrint.component';

// import { HomePageComponent } from '../../homePage/homePage.component';
import { FirebaseConfigService } from '../../core/services/firebase-config.service';

// Services
import { TransactionService } from '../transaction/service/transaction.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import {TransactionCustomerNamePipe} from './pipes/transaction.pipe';
import {TransactionCustomerEmailPipe} from './pipes/transactionEmail.pipe';
import {TransactionTypeNamePipe} from './pipes/transactionTypeName.pipe';

@NgModule ({ 

    imports: [CoreModule, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [ DropdownComponent,TransactionPrintComponent, TransactionCustomerNamePipe, TransactionCustomerEmailPipe, TransactionTypeNamePipe],
    exports: [ DropdownComponent, TransactionPrintComponent, TransactionCustomerNamePipe, TransactionCustomerEmailPipe, TransactionTypeNamePipe],
    providers: [ TransactionService, FirebaseConfigService ]


})

export class TransactionModule { }