import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EccCalculatorComponent } from './ecc-calculator.component';

describe('EccCalculatorComponent', () => {
  let component: EccCalculatorComponent;
  let fixture: ComponentFixture<EccCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
