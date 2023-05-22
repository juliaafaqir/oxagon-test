import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulechainsComponent } from './rulechains.component';

describe('RulechainsComponent', () => {
  let component: RulechainsComponent;
  let fixture: ComponentFixture<RulechainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulechainsComponent]
    });
    fixture = TestBed.createComponent(RulechainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
