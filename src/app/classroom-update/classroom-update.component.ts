import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { Classroom } from '../classroom';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-classroom-update',
  templateUrl: './classroom-update.component.html',
  styleUrls: ['./classroom-update.component.css']
})
export class ClassroomUpdateComponent implements OnInit {

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

  onSubmit() {
    this.classroomService.updateClassroom(this.id, this.classroom).subscribe(data => {
      this.goToAdminClassroomList();
    }, 
    // error => console.log(error)
    );
  }

  goToAdminClassroomList() {
    this.router.navigate(['/admin/classroom']);
  }

}
