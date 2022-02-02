import { Component, OnInit } from '@angular/core';
import { Sheet } from '../sheet';
import { SheetService } from '../sheet.service';
import { Router } from '@angular/router';
import { OrderbyPipe } from '../orderby.pipe';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {

  sheets!: Sheet[];

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

}
