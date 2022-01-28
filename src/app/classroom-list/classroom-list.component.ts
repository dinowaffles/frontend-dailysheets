import { Component, OnInit } from '@angular/core';
import { Classroom } from '../classroom';
import { ClassroomService } from '../classroom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent implements OnInit {

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

  updateClassroom(id: number) {
    this.router.navigate(['classroom-update', id]);
  }

  deleteClassroom(id: number) {
    this.classroomService.deleteClassroom(id).subscribe(data => {
      console.log(data);
      this.getClassrooms();
    })
  }

}
