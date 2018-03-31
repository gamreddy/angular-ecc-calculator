import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { ColorCode } from './color-code';

@Injectable()
export class EccCalculatorService {

  constructor(
  ) { }

  getMinResistance(colorA: ColorCode, colorB: ColorCode, colorC: ColorCode, colorD: ColorCode){
    let resistance = this.getResistance(colorA, colorB, colorC);
    let tolerance = this.getTolerance(colorD);
    let minResistance = 0;
    if (resistance !== 0) {
      minResistance = resistance - resistance * tolerance
    }

    return minResistance;
  }

  getMaxResistance(colorA: ColorCode, colorB: ColorCode, colorC: ColorCode, colorD: ColorCode){
    let resistance = this.getResistance(colorA, colorB, colorC);
    let tolerance = this.getTolerance(colorD);
    let maxResistance = 0;
    if (resistance !== 0) {
      maxResistance = resistance + resistance * tolerance;
    }

    return maxResistance;
  }

  getResistance(colorA: ColorCode, colorB: ColorCode, colorC: ColorCode): number {
    if (colorA && colorB && colorC) {
      let aValue = this.getValue(colorA);
      let bValue = this.getValue(colorB);
      let cValue = this.getMultiplier(colorC);
      return ((aValue * 10 + bValue) * cValue);
    }
    return 0;
  }

  private getValue(color: ColorCode): number {
    if (color.significantFigures) {
      return color.significantFigures;
    } else {
      return -1;
    }
  }

  private getMultiplier(color: ColorCode): number {
    if (color.multiplier) {
      return color.multiplier;
    } else {
      return 1;
    }
  }

  private getTolerance(color: ColorCode): number {
    if (color) {
      if (color.tolerance) {
        return color.tolerance;
      } else {
        return 0;
      }
    }
    return 0.2;
  }  

}
