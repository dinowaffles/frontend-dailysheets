import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Classroom } from '../classroom';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  id!: number;
  student: Student = new Student();

  constructor(private studentService: StudentService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
    }, 
    // error => console.log(error)
    );
  }

  onSubmit() {
    this.studentService.deleteStudent(this.id).subscribe(data => {
      this.goToAdminStudentList();
    }, 
    // error => console.log(error)
    )
  }

  goToAdminStudentList() {
    this.router.navigate(['/admin/student']);
  }

}
