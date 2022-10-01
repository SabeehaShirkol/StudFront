import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';
import { NgForm } from '@angular/forms';
import { formatDate } from "@angular/common";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

title = "Fill the below details :"

//Student = null as any;
editStudent = {
  firstName: "",
  lastName:"",
  studentClass:"",
  subject: "",
  dob:formatDate( new Date, 'yyyy/MM/dd', 'en')
}



student: Student = new Student();
students: Student[] = [];

ngForm() {}


save() {

  const observable = this.studentService.createStudent(this.student);
  observable.subscribe(
    (response: any) => {
      console.log(response);
      alert("Student Added....!");
      location.reload();
    },
    function(error){
      console.log(error);
      alert("Something went wrong, Please try again!");
    }   
 )
 
}
//  edit(student: any){
//   this.editStudent = student;
//  }

// updateStudent(){
//   this.studentService.updateStudents(this.student).subscribe(
//     (response :any) => {
//       console.log(response);
//     },
//     function(error){
//       console.log(error);
//       alert("Something went wrong, Please try again!");
//     }
//   )
// }

  constructor(public studentService: StudentService) {
      
  }
   

  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response) => {
    console.log(response);
    this.students = response as Student[];
    })
  }
 
}

