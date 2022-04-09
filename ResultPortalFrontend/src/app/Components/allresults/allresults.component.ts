import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentloginService } from 'src/app/Services/student/studentlogin.service';
import { TeacherloginService } from 'src/app/Services/teacher/teacherlogin.service';
import { Students } from 'src/app/students';
@Component({
  selector: 'app-allresults',
  templateUrl: './allresults.component.html',
  styleUrls: ['./allresults.component.css']
})
export class AllresultsComponent implements OnInit {

  constructor(private studentLoginService : StudentloginService, private router : Router, private route : ActivatedRoute,
    private teacherLoginService : TeacherloginService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  errorpage : boolean = this.studentLoginService.getErrorPage();
  viewresults : boolean = this.studentLoginService.getVisibility();
  results : Students[] = this.studentLoginService.getResults();
  student = new Students();
  studentdeleteid : any;
  editresult(student : any){
    this.studentLoginService.setVisibility(true);
    this.studentLoginService.setErrorPage(false);
    this.studentLoginService.setStudent(student);
    this.router.navigate(['editresult/']);
  }
  delete(student : Students){
    this.student.id = student.id;
    this.student.name = student.name;
    this.student.dob = student.dob;
    this.student.score = student.score;

    this.teacherLoginService.deleteResult(this.student).subscribe(result =>{
      if(result===1){
        alert('Result Successfully Deleted');
        this.teacherLoginService.getAllStudents().subscribe(result =>{
          this.results = result;
        });
      }
    });
  }
  addresult(){
    this.studentLoginService.setVisibility(true);
    this.studentLoginService.setErrorPage(false);
    this.router.navigate(['addresult/']);
  }
  logout(){
    this.router.navigate(['/']);
  }
}
