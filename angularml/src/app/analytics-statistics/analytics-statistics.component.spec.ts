import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsStatisticsComponent } from './analytics-statistics.component';

describe('AnalyticsStatisticsComponent', () => {
  let component: AnalyticsStatisticsComponent;
  let fixture: ComponentFixture<AnalyticsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
