import { Component, OnInit } from '@angular/core';
import { Sheet } from '../sheet';
import { SheetService } from '../sheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
