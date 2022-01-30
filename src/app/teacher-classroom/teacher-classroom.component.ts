import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { Classroom } from '../classroom';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-classroom',
  templateUrl: './teacher-classroom.component.html',
  styleUrls: ['./teacher-classroom.component.css']
})
export class TeacherClassroomComponent implements OnInit {

  id!: number;
  classroom: Classroom = new Classroom();

  constructor(private classroomService: ClassroomService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.classroomService.getClassroomById(this.id).subscribe(data => {
      this.classroom = data;
    }, 
    // error => console.log(error)
    );
  }

}
