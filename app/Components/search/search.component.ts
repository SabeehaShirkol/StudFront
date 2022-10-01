import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  student: Student[] = [];

  stud={
    sId:0,
    firstName:'',
    lastName:'',
    studentClass:'',
    subject:'',
    dob:new Date()

  };
 

  getStudentByClass1(studentClass:string) {
     const promise = this.studentService.getStudentByClass(studentClass);
     promise.subscribe((response) => {
       this.student.splice(0);
       console.log(response);
       this.student = response as Student[];
     },
     function(error) {
       console.log(error);
       alert("Something went wrong");
     })
  } 
  
  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }

}
