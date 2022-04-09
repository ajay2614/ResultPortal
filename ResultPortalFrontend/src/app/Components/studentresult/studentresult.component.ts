import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentloginService } from 'src/app/Services/student/studentlogin.service';
import { Students } from 'src/app/students';

@Component({
  selector: 'app-studentresult',
  templateUrl: './studentresult.component.html',
  styleUrls: ['./studentresult.component.css']
})
export class StudentresultComponent implements OnInit {

  constructor(private studentLoginService:StudentloginService, private router: Router) { }

  errorpage : boolean = this.studentLoginService.getErrorPage();
  viewstudentreport : boolean = this.studentLoginService.getVisibility();
  studentid : any = this.studentLoginService.getStudent().id;
  studentname: any = this.studentLoginService.getStudent().name;
  studentdob : any = this.studentLoginService.getStudent().dob;
  studentscores : any = this.studentLoginService.getStudent().score;
  
  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/']);
  }
}
