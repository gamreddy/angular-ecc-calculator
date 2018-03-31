import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EccCalculatorIntroComponent } from './ecc-calculator-intro.component';

describe('EccCalculatorIntroComponent', () => {
  let component: EccCalculatorIntroComponent;
  let fixture: ComponentFixture<EccCalculatorIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccCalculatorIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccCalculatorIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
