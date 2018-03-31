import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ColorCode } from './color-code';
import { ColorCodeDataService } from './color-code-data.service';

@Injectable()
export class ColorCodesResolver implements Resolve<Observable<ColorCode[]>> {

  constructor(
    private colorCodesDataService: ColorCodeDataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ColorCode[]> {
    return this.colorCodesDataService.getAllColorCodes();
  }
}
