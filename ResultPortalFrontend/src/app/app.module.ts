import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { TeacherLoginComponent } from './Components/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
import { AllresultsComponent } from './Components/allresults/allresults.component';
import { EditresultComponent } from './Components/editresult/editresult.component';
import { AddresultComponent } from './Components/addresult/addresult.component';
import { StudentresultComponent } from './Components/studentresult/studentresult.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherLoginComponent,
    StudentLoginComponent,
    AllresultsComponent,
    EditresultComponent,
    AddresultComponent,
    StudentresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
