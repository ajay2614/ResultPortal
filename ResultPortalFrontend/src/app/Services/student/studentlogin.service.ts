import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from 'src/app/students';
@Injectable({
  providedIn: 'root'
})
export class StudentloginService {

  results : Students[];
  errorpage : boolean = true;
  visibility : boolean = false;
  student : Students;
  id : number;
  constructor(private http:HttpClient) { }

  checklogin(val : any){
    return this.http.post('http://localhost:4000/studentexists',val);
  }

  getOneStudent(val : Students){
    return this.http.post<Students>('http://localhost:4000/getstudent',val);
  }

  setResults(results : Students[]) : void{
    this.results = results;
  }

  getResults() : Students[]{
    return this.results;
  }
  setVisibility(visibility:boolean){
    this.visibility = visibility;
  }
  getVisibility() : boolean{
    return this.visibility;
  }
  setErrorPage(errorpage:boolean){
    this.errorpage = errorpage;
  }
  getErrorPage() : boolean{
    return this.errorpage;
  }
  setStudent(student : Students){
    this.student = student;
  }
  getStudent() : Students {
    return this.student;
  }

  setId(id : number){
    this.id = id;
  }
  getId() : number{
    return this.id
  }
}
