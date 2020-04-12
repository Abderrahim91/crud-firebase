import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student.service';
import { Student } from '../shared/models/student';
import { AngularFirestore } from '@angular/fire/firestore';

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

  save() {
    this.studentService.AddStudent({...this.student })
  }

}
