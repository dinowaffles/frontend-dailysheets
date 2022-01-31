import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClassroomCreateComponent } from './classroom-create/classroom-create.component';
import { ClassroomDeleteComponent } from './classroom-delete/classroom-delete.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { ClassroomUpdateComponent } from './classroom-update/classroom-update.component';
import { ParentStudentComponent } from './parent-student/parent-student.component';
import { ParentComponent } from './parent/parent.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { TeacherClassroomComponent } from './teacher-classroom/teacher-classroom.component';
import { TeacherStudentAddComponent } from './teacher-student-add/teacher-student-add.component';
import { TeacherStudentComponent } from './teacher-student/teacher-student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: 'student',
    component: ParentComponent,
  },
  {
    path: 'student/:id',
    component: ParentStudentComponent,
  },

  {
    path: 'classroom',
    component: TeacherComponent,
  },
  {
    path: 'classroom/:id',
    component: TeacherClassroomComponent,
  },
  {
    path: 'classroom/:id/add',
    component: TeacherStudentAddComponent,
  },
  {
    path: 'classroom/:id/student/:id',
    component: TeacherStudentComponent,
  },

  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path:'admin/student',
    component: StudentListComponent,
  }, 
  {
    path:'admin/student/add',
    component: StudentCreateComponent,
  },
  {
    path:'admin/student/update/:id',
    component: StudentUpdateComponent,
  },
  {
    path: 'admin/student/delete/:id',
    component: StudentDeleteComponent,
  },
  {
    path: 'admin/classroom',
    component: ClassroomListComponent,
  },
  {
    path: 'admin/classroom/add',
    component: ClassroomCreateComponent,
  },
  {
    path: 'admin/classroom/update/:id',
    component: ClassroomUpdateComponent,
  },
  {
    path:'admin/classroom/delete/:id',
    component: ClassroomDeleteComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
