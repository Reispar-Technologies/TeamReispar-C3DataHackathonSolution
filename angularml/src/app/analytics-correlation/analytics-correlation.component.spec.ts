import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCorrelationComponent } from './analytics-correlation.component';

describe('AnalyticsCorrelationComponent', () => {
  let component: AnalyticsCorrelationComponent;
  let fixture: ComponentFixture<AnalyticsCorrelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsCorrelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsCorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
