import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassroomComponent } from './teacher-classroom.component';

describe('TeacherClassroomComponent', () => {
  let component: TeacherClassroomComponent;
  let fixture: ComponentFixture<TeacherClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherClassroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
