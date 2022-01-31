import { Component, OnInit } from '@angular/core';
import { Sheet } from '../sheet';
import { SheetService } from '../sheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-classroom',
  templateUrl: './teacher-classroom.component.html',
  styleUrls: ['./teacher-classroom.component.css']
})
export class TeacherClassroomComponent implements OnInit {

  sheets: Sheet[] | undefined;

  constructor(private sheetService: SheetService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getSheets();
  }

  private getSheets() {
    this.sheetService.getSheetList().subscribe(data => {
      this.sheets = data;
    });
  }

  updateSheet(id: number) {
    this.router.navigate(['/classroom/:id/student', id]);
  }

}
