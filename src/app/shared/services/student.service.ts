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
  getStudentsList() {
    return this.firestore.collection('students').snapshotChanges();
  }
  deleteStudent(studentId: string){
    this.firestore.doc('students/' + studentId).delete();
    }
    getStudent(id: string) {
      return this.firestore.doc('students/' + id).get();
      }
      updateStudent(student: Student) {
        return this.firestore.doc('students/' + student.id).update(student);
        }
        
}
