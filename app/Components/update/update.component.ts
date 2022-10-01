import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

student: Student = new Student();
students: Student[] = [];
sId:number=0;


  constructor(public studentService: StudentService) { }
  



  updateStudent(st :any ,j:number)
  {

       this.sId=st.sId;
        console.log(st.sId);
        this.student.firstName=st.firstName;
        console.log(st.firstName);
        this.student.lastName=st.lastName;
        console.log(st.lastName);
        this.student.studentClass=st.studentClass;
        console.log(st.studentClass);
        this.student.subject=st.subject;
        console.log(st.subject);
        this.student.dob=st.dob;
        console.log(st.dob);

        

          }

          update(student : any)
          {
            
             console.log(student); 
            const observable=this.studentService.updateStudents(this.student,this.sId);
        observable.subscribe(
          (response:any) => {
          console.log(response)
          alert("Student Updated");
          },
          function(error){
            console.log(error);
            alert("Something went wrong");        
          });

          window.location.reload();
            
          }

    

  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response) => {  
    console.log(response);
      this.students = response as Student[];
  });
  {
    const promise = this
  }
  }


}
