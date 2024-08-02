import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysignalsComponent } from './mysignals.component';

describe('MysignalsComponent', () => {
  let component: MysignalsComponent;
  let fixture: ComponentFixture<MysignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MysignalsComponent]
    });
    fixture = TestBed.createComponent(MysignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
