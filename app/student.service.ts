import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Student from './Entity/Student';
import { Observable } from 'rxjs';

const BASE_URL = "http://localhost:7000/api/studentmanagement/student";
const GET_URL = "http://localhost:7000/api/studentmanagement/allstudents";
const DELETE_URL = "http://localhost:7000/api/studentmanagement/allstudents";
const UPDATE_URL = 'http://localhost:7000/api/studentmanagement/update/';
const GETSTUDENTBYCLASS_URL = "http://localhost:7000/api/studentmanagement/student/";



@Injectable({
  providedIn: 'root'
})

export class StudentService {
 

  createStudent(Student: {firstName:string;lastName:string;studentClass:string;subject:string;dob:Date}){
    return this.http.post(BASE_URL, Student);
  }

  getStudents() {
    return this.http.get(GET_URL);
  }
  constructor(public http : HttpClient) {}

  deleteStudent(student:any) {
    return this.http.delete(DELETE_URL);
  }

  // updateStudents(student:any) {
  //   return this.http.put(UPDATE_URL, student.sId);
  // }

  // updateData(data: any, id: string): Observable<any> {
  //     return this.http.patch(`${this.TEST_URL}/update/${id}`, data)
  // }
 
  getStudentByClass(studentClass: string) {
    return this.http.get(GETSTUDENTBYCLASS_URL + studentClass+ "/studentClass");
  }

  updateStudents(student :any ,sId:number)
{
 return this.http.put(UPDATE_URL+sId,student);
}

// getStudentById(sId:number)
// {
//   return this.http.get(GETSTUDENTBYCLASS_URL+sId);
// }

}