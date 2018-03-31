import { TestBed, inject } from '@angular/core/testing';

import { ColorCodeDataService } from './color-code-data.service';

describe('ColorCodeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorCodeDataService]
    });
  });

  it('should be created', inject([ColorCodeDataService], (service: ColorCodeDataService) => {
    expect(service).toBeTruthy();
  }));
});
