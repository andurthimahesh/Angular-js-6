import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list.component';
import { StudentFormComponent } from './student-form.component';
import { FormsModule } from "@angular/forms";

var routes =[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'list',component:StudentListComponent},
    {path:'insert',component:StudentFormComponent},
    {path:'',component:HomeComponent}
]

@NgModule({
    imports: [BrowserModule,RouterModule.forRoot(routes),RouterModule,HttpClientModule,FormsModule],
    exports: [],
    declarations: [AppComponent,AboutComponent,ContactComponent,HomeComponent,StudentListComponent,StudentFormComponent],
    bootstrap:[AppComponent],
    providers:[StudentService]
    
})
export class AppModule { }
