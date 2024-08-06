import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalsComponent } from './conditionals.component';

describe('ConditionalsComponent', () => {
  let component: ConditionalsComponent;
  let fixture: ComponentFixture<ConditionalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionalsComponent]
    });
    fixture = TestBed.createComponent(ConditionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
