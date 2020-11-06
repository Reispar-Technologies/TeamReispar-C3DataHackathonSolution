import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidImpactComponent } from './covid-impact.component';

describe('CovidImpactComponent', () => {
  let component: CovidImpactComponent;
  let fixture: ComponentFixture<CovidImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidImpactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
