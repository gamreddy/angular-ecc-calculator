import { TestBed, inject } from '@angular/core/testing';

import { EccCalculatorService } from './ecc-calculator.service';

describe('EccCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EccCalculatorService]
    });
  });

  it('should be created', inject([EccCalculatorService], (service: EccCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
