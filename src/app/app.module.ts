import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';


//import { AngularFireStorageModule } from '@angular/f';

import { environment } from '../environments/environment';
import { ListStudentsComponent } from './list-students/list-students.component';

const routes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  { path: 'list-students', component: ListStudentsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
