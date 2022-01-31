import { Component, OnInit } from '@angular/core';
import { Sheet } from '../sheet';
import { SheetService } from '../sheet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-student',
  templateUrl: './teacher-student.component.html',
  styleUrls: ['./teacher-student.component.css']
})
export class TeacherStudentComponent implements OnInit {

  sheets: Sheet[] | undefined;
  id!: number;
  sheet!: Sheet;

  constructor(private route: ActivatedRoute, 
    private sheetService: SheetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sheet = new Sheet();
    this.sheetService.getSheetById(this.id).subscribe(data => {
      this.sheet = data;
    });
  }

}
