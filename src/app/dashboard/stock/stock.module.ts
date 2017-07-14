import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { EditStockComponent } from '../stock/editStockComponent/editStockComponent.component';

import { FirebaseConfigService } from '../../core/services/firebase-config.service';

// Services
import { StockService } from '../stock/service/stock.service';

import {StockSoldPipe} from "./pipes/stockSold.pipe";
import {StockNamePipe} from "./pipes/stockName.pipe";
import {StockCostPipe} from "./pipes/stockCost.pipe";


@NgModule ({ 

    imports: [CoreModule, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [ EditStockComponent, StockCostPipe, StockNamePipe, StockSoldPipe ],
    exports: [ EditStockComponent, StockCostPipe, StockNamePipe, StockSoldPipe ],
    providers: [ StockService, FirebaseConfigService ]


})

export class StockModule { }