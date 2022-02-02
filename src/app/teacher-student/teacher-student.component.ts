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

  id!: number;
  sheet: Sheet = new Sheet();
  sheets: Sheet[] | undefined;

  constructor(private route: ActivatedRoute, private router: Router, 
    private sheetService: SheetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sheetService.getSheetById(this.id).subscribe(data => {
      this.sheet = data;
    }, 
    // error => console.log(error)
    );
    this.getSheets();
  }

  onSubmit() {
    this.sheetService.updateSheet(this.id, this.sheet).subscribe(data => {
      this.refreshStudent();
    }, 
    // error => console.log(error)
    )
  }

  sidebarClick() {
    this.id = this.route.snapshot.params['id'];

    this.sheetService.getSheetById(this.id).subscribe(data => {
      this.sheet = data;
    }, 
    // error => console.log(error)
    );
    this.getSheets();
  }

  private getSheets() {
    this.sheetService.getSheetList().subscribe(data => {
      this.sheets = data;
    });
  }

  refreshStudent() {
    // this.router.navigate([`/student/update/${this.id}`]);
    window.location.reload();
  }

}
