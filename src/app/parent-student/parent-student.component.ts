import { Component, OnInit } from '@angular/core';
import { Sheet } from '../sheet';
import { SheetService } from '../sheet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent-student',
  templateUrl: './parent-student.component.html',
  styleUrls: ['./parent-student.component.css']
})
export class ParentStudentComponent implements OnInit {

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
