import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EccCalculatorAboutComponent } from './ecc-calculator-about.component';

describe('EccCalculatorAboutComponent', () => {
  let component: EccCalculatorAboutComponent;
  let fixture: ComponentFixture<EccCalculatorAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccCalculatorAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccCalculatorAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
