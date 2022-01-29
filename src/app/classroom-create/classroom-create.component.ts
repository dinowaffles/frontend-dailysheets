import { Component, OnInit } from '@angular/core';
import { Classroom } from '../classroom';
import { ClassroomService } from '../classroom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom-create',
  templateUrl: './classroom-create.component.html',
  styleUrls: ['./classroom-create.component.css']
})
export class ClassroomCreateComponent implements OnInit {

  classroom: Classroom = new Classroom();

  constructor(private classroomService: ClassroomService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveClassroom() {
    this.classroomService.addClassroom(this.classroom).subscribe(data => {
      console.log(data);
      this.goToAdminClassroomList();
    },
    // error => console.log(error)
    );
  }

  goToAdminClassroomList() {
    this.router.navigate(['/admin/classroom']);
  }

  onSubmit() {
    console.log(this.classroom);
    this.saveClassroom();
  }

}
