import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomDeleteComponent } from './classroom-delete.component';

describe('ClassroomDeleteComponent', () => {
  let component: ClassroomDeleteComponent;
  let fixture: ComponentFixture<ClassroomDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
