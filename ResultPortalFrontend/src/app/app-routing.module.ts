import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TeacherLoginComponent } from './Components/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
import { AllresultsComponent } from './Components/allresults/allresults.component';
import { EditresultComponent } from './Components/editresult/editresult.component';
import { AddresultComponent } from './Components/addresult/addresult.component';
import { StudentresultComponent } from './Components/studentresult/studentresult.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path: 'teacherlogin', component:TeacherLoginComponent},
  {path: 'studentlogin', component:StudentLoginComponent},
  {path: 'allresults', component:AllresultsComponent},
  {path : 'editresult', component:EditresultComponent},
  {path : 'addresult', component:AddresultComponent},
  {path : 'studentresult', component:StudentresultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
