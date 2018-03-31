import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EccCalculatorHeaderComponent } from './ecc-calculator-header.component';

describe('EccCalculatorHeaderComponent', () => {
  let component: EccCalculatorHeaderComponent;
  let fixture: ComponentFixture<EccCalculatorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccCalculatorHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccCalculatorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
