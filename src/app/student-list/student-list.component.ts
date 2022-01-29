import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] | undefined;

  constructor(private studentService: StudentService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

  updateStudent(id: number) {
    this.router.navigate(['/admin/student/update', id]);
  }

  deleteStudent(id: number) {
    this.router.navigate(['/admin/student/delete', id]);
  }

}
