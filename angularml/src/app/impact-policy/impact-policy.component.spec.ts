import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactPolicyComponent } from './impact-policy.component';

describe('ImpactPolicyComponent', () => {
  let component: ImpactPolicyComponent;
  let fixture: ComponentFixture<ImpactPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
