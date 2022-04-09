import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from 'src/app/students';

@Injectable({
  providedIn: 'root'
})
export class TeacherloginService {

  constructor(private http:HttpClient) { }

  checklogin(val : any){
  return this.http.post('http://localhost:4000/userexists',val);
  }
  getAllStudents() : Observable<Students[]>{
    return this.http.get<Students[]>('http://localhost:4000/getallstudents');
  }
  editResult(val:any) {
    return this.http.put('http://localhost:4000/editresult',val);
  }
  addResult(val:any) {
    return this.http.post('http://localhost:4000/addresult',val);
  }
  
  deleteResult(val : any) {
    return this.http.post('http://localhost:4000/deleteresult',val);
  }
}
