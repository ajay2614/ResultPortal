import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TeacherloginService } from 'src/app/Services/teacher/teacherlogin.service';
import { StudentloginService } from 'src/app/Services/student/studentlogin.service';
import { Students } from 'src/app/students';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  students : Students[];
  constructor(private http : HttpClient, private teacherLoginService : TeacherloginService, 
    private studentLoginService : StudentloginService,private router: Router, 
    private route:  ActivatedRoute) { }

  ngOnInit(): void {
  }
  // loginTeacher(val: any){
  //   this.http.post('http://localhost:4000/loginteacher',val.value)
  //   .subscribe((result)=>{
  //     if(result === 0){
  //       alert('Username or Password is Incorrect');
  //     }
  //     alert(JSON.stringify(result));
  //   })
  // //  alert(JSON.stringify(val.value));    
  // }
  loginTeacher(val:any){
    this.teacherLoginService.checklogin(val.value).subscribe(result =>{
      if(result===0){
        alert('Username or Password is Incorrect');
      }
      else if(result===1) {
        this.teacherLoginService.getAllStudents().subscribe(result =>{
            this.students = result;
            this.studentLoginService.setResults(this.students);
            this.studentLoginService.setVisibility(true);
            this.studentLoginService.setErrorPage(false);
            this.router.navigate(['allresults/']);
        });
      }
    });
  }
}
