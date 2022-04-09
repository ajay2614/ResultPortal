import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentloginService } from 'src/app/Services/student/studentlogin.service';
import { TeacherloginService } from 'src/app/Services/teacher/teacherlogin.service';
import { Students } from 'src/app/students';

@Component({
  selector: 'app-addresult',
  templateUrl: './addresult.component.html',
  styleUrls: ['./addresult.component.css']
})
export class AddresultComponent implements OnInit {

  constructor(private studentLoginService : StudentloginService,private teacherLoginService :TeacherloginService,
    private  http : HttpClient, private router : Router, private route : ActivatedRoute) { }

  errorpage : boolean = this.studentLoginService.getErrorPage();
  viewaddresultform : boolean = this.studentLoginService.getVisibility();
  studentid : any | undefined;
  studentname: any | undefined; 
  studentdob : any | undefined;
  studentscores : any | undefined;
  student = new Students();
  ngOnInit(): void {
  }

  addresultForm(){
  
    if(this.studentid === undefined || this.studentname === undefined || this.studentdob === undefined || this.studentscores === undefined){
      alert('Please enter all the fields');
      return;
    }
    

    let today = new Date().toISOString().slice(0, 10)
    var arr = today.split('-');
    var arr1 = arr[0].split(',');
    var arr2 = arr[1].split(',');
    var arr3= arr[2].split(',');

    const currentdate = arr2 + '/' + arr3 + '/' + arr1;
    var dob = this.studentdob.split('-');
    var dob1 = dob[0].split(',');
    var dob2 = dob[1].split(',');
    var dob3 = dob[2].split(',');
    const dateofbirth = dob2 + '/' + dob3 + '/' + dob1;
    var dte1 = new Date(currentdate);  
    var dte2 = new Date(dateofbirth); 
    var time_difference = dte1.getTime() - dte2.getTime();  
    var days_difference = time_difference / (1000 * 60 * 60 * 24);


  
    if(this.studentid.toString().length < 3 || this.studentid.toString().length >9){
      alert("Roll Number must be of Minimum 3 characters and Maximum of 9");
      return;   
    }
    if(this.studentname.length <3){
      alert("Name must Minimum 3 characters");
      return;
    }
    if(this.studentscores>100 || this.studentscores < 0){
      alert('Result cannot be more than 100 or less than 0, please try again');
      return;
    }
    if(this.studentscores < 100 && this.studentscores >= 0){
      if(this.studentscores % 1 != 0 && this.studentscores % 1 != 0.5){
          alert('Scores must note have more than 2 decimals and last decimal digit must be either 0 or 5, Please enter scores again');
          return
      }
    }
    if(days_difference < 720 || days_difference > 7300){
      alert("Minimum difference b/w current date and student birth date must be 2 years and maximum must be 20 years, please try again");
      return;
    }

    this.student.id = this.studentid;
    this.student.name = this.studentname;
    this.student.dob = this.studentdob;
    this.student.score = this.studentscores;

    this.teacherLoginService.addResult(this.student).subscribe((result)=>{
      if(result===1){
        alert('Result Successfully Added');
        this.teacherLoginService.getAllStudents().subscribe(result =>{
          this.studentLoginService.setResults(result);
          this.studentLoginService.setVisibility(true);
          this.studentLoginService.setErrorPage(false);
          this.router.navigate(['allresults/']);
        })
      } else{
        alert('Result not Added, Please try again');
      }
    });
  }
  logout(){
    this.router.navigate(['/']);
  }
  cancel(){
    this.router.navigate(['allresults/']);
  }
}
