import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectResultComponent } from './project-result.component';

describe('ProjectResultComponent', () => {
  let component: ProjectResultComponent;
  let fixture: ComponentFixture<ProjectResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
