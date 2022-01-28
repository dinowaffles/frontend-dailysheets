import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { ClassroomCreateComponent } from './classroom-create/classroom-create.component';
import { ClassroomUpdateComponent } from './classroom-update/classroom-update.component';
import { ClassroomDeleteComponent } from './classroom-delete/classroom-delete.component';
import { TeacherStudentComponent } from './teacher-student/teacher-student.component';
import { ParentStudentComponent } from './parent-student/parent-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentCreateComponent,
    StudentUpdateComponent,
    StudentListComponent,
    StudentDeleteComponent,
    ClassroomListComponent,
    ClassroomCreateComponent,
    ClassroomUpdateComponent,
    ClassroomDeleteComponent,
    TeacherStudentComponent,
    ParentStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
