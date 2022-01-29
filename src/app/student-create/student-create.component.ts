import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student = new Student();

  constructor(private studentService: StudentService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  saveStudent() {
    this.studentService.addStudent(this.student).subscribe(data => {
      console.log(data);
      this.goToAdminStudentList();
    }, 
    // error => console.log(error)
    );
  }

  goToAdminStudentList() {
    this.router.navigate(['/admin/student']);
  }

  onSubmit() {
    console.log(this.student);
    this.saveStudent();
  }

}
