import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtscanComponent } from './ctscan.component';

describe('CtscanComponent', () => {
  let component: CtscanComponent;
  let fixture: ComponentFixture<CtscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtscanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
