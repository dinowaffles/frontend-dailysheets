import { Component, OnInit } from '@angular/core';
import { Sheet } from '../sheet';
import { SheetService } from '../sheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-student-add',
  templateUrl: './teacher-student-add.component.html',
  styleUrls: ['./teacher-student-add.component.css']
})
export class TeacherStudentAddComponent implements OnInit {

  sheet: Sheet = new Sheet();

  constructor(private sheetService: SheetService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  saveSheet() {
    this.sheetService.createSheet(this.sheet).subscribe(data => {
      console.log(data);
      this.goToStudentList();
    }, 
    // error => console.log(error)
    );
  }

  goToStudentList() {
    this.router.navigate(['/classroom/:id']);
  }

  onSubmit() {
    console.log(this.sheet);
    this.saveSheet();
  }

}
