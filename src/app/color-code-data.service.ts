import { Injectable } from '@angular/core';
import { ColorCode } from './color-code';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ColorCodeDataService {

  constructor( 
    private api: ApiService
  ) { }

  // Simulate GET /colorCodes
  getAllColorCodes(): Observable<ColorCode[]> {
    return this.api.getAllColorCodes();
  }

  // Simulate GET /todos/:id
  getColorCodeById(colorCodeId: string): Observable<ColorCode> {
    return this.api.getColorCodeById(colorCodeId);
  }  

}
