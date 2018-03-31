export class ColorCode {

    id: number;
    name: string = '';
    code: string = '';
    complete: boolean = false;
    significantFigures: number = null;
    multiplier: number = 1;
    tolerance: number = null;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }    

}
