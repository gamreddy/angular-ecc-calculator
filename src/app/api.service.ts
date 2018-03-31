import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { ColorCode } from './color-code';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { 

  }

  // API: GET /colorCodes
  public getAllColorCodes() {
    return this.http
    .get(API_URL + '/colorCodes')
    .map(response => {
      const colorCodes = response.json();
      return colorCodes.map((code) => new ColorCode(code));
    })
    .catch(this.handleError);
  }

  // API: GET /colorCodes/:id
  public getColorCodeById(colorCodeId: string) {
    return this.http
    .get(API_URL + '/colorCodes/' + colorCodeId)
    .map(response => {
      return new ColorCode(response.json());
    })
    .catch(this.handleError);
  }
  
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
