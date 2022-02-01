import { Component, OnInit } from '@angular/core';
import { Sheet } from '../sheet';
import { SheetService } from '../sheet.service';
import { Classroom } from '../classroom';
import { ClassroomService } from '../classroom.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-classroom',
  templateUrl: './teacher-classroom.component.html',
  styleUrls: ['./teacher-classroom.component.css']
})
export class TeacherClassroomComponent implements OnInit {

  sheets: Sheet[] | undefined;
  classrooms: Classroom[] | undefined;
  id!: number;
  classroom: Classroom = new Classroom();

  constructor(private sheetService: SheetService, 
    private classroomService: ClassroomService,
    private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getSheets();
    this.getClassrooms();
    this.id = this.route.snapshot.params['id'];

    this.classroomService.getClassroomById(this.id).subscribe(data => {
      this.classroom = data;
    }, 
    // error => console.log(error)
    );
  }

  private getSheets() {
    this.sheetService.getSheetList().subscribe(data => {
      this.sheets = data;
    });
  }

  updateSheet(id: number) {
    this.router.navigate(['/student/update', id]);
  }

  private getClassrooms() {
    this.classroomService.getClassroomList().subscribe(data => {
      this.classrooms = data;
    });
  }

  private getClassroom() {
    
  }

}
