import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Classroom } from '../classroom';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

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
    this.studentService.updateStudent(this.id, this.student).subscribe(data => {
      this.goToAdminStudentList();
    }, 
    // error => console.log(error)
    )
  }

  goToAdminStudentList() {
    this.router.navigate(['/admin/student']);
  }

}
