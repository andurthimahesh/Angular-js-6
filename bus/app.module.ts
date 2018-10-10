import {NgModule} from '@angular/core';
import {AppComponent} from'./app.component';
import { BrowserModule } from '@angular/platform-browser';
import{BusInsertService} from './busin.service';
import { BusInsComponent } from './busins.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BusGetComponent } from './busget.component';
import { BusGetService } from './busget.service';
@NgModule({
imports:[BrowserModule,HttpClientModule,FormsModule],
declarations:[AppComponent,BusInsComponent,BusGetComponent],
providers:[BusInsertService,BusGetService],
bootstrap:[AppComponent]
})
export class AppModule{

}