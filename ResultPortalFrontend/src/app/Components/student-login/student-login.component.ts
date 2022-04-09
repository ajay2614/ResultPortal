import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentloginService } from 'src/app/Services/student/studentlogin.service';
import { Students } from 'src/app/students';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor(private studentLoginService : StudentloginService, private router : Router) { }

  student = new Students();
  ngOnInit(): void {
  }
  loginStudent(val:any){
    this.studentLoginService.checklogin(val.value).subscribe(result =>{
      if(result===0){
        alert('Username or Password is Incorrect');
      }
      else if(result===1) {
        this.student.id = val.value.id;
        this.studentLoginService.setId(val.value.id);
        this.studentLoginService.getOneStudent(this.student).subscribe(result =>{
          this.studentLoginService.setStudent(result);
          this.studentLoginService.setVisibility(true);
          this.studentLoginService.setErrorPage(false);
          this.router.navigate(['studentresult/']);
        })
      };
    });
  }
}