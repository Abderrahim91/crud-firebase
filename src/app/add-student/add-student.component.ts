import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student.service';
import { Student } from '../shared/models/student';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public student = new Student();

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  save(formAdd:NgForm) {
    if (!this.student.id) {
      this.studentService.AddStudent({ ...this.student }).then((res) => {
      formAdd.resetForm();
      })
      } else {
      this.studentService.updateStudent(this.student);
      }
      }  
  getStudent(id) {
    this.studentService.getStudent(id).subscribe(res => {
    this.student = res.data() as Student;
    this.student.id = res.id;
    });
    }
}
