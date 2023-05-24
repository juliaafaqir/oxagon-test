import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeManagementComponent } from './edge-management.component';

describe('EdgeManagementComponent', () => {
  let component: EdgeManagementComponent;
  let fixture: ComponentFixture<EdgeManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdgeManagementComponent]
    });
    fixture = TestBed.createComponent(EdgeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
