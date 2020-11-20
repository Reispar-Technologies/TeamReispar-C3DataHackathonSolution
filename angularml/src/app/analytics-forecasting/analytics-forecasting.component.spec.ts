import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsForecastingComponent } from './analytics-forecasting.component';

describe('AnalyticsForecastingComponent', () => {
  let component: AnalyticsForecastingComponent;
  let fixture: ComponentFixture<AnalyticsForecastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsForecastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsForecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
