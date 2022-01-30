import { Component, OnInit } from '@angular/core';
import { Classroom } from '../classroom';
import { ClassroomService } from '../classroom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  classrooms: Classroom[] | undefined;

  constructor(private classroomService: ClassroomService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getClassrooms();
  }

  private getClassrooms() {
    this.classroomService.getClassroomList().subscribe(data => {
      this.classrooms = data;
    });
  }

}
