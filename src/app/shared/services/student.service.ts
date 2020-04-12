import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public firestore: AngularFirestore) { }

  AddStudent(student: Student) {
    return this.firestore.collection('students').add(student);
  }

}
