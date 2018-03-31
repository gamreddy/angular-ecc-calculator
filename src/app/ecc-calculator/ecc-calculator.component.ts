import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ColorCode } from '../color-code';
import { getQueryValue } from '@angular/core/src/view/query';
import { EccCalculatorService } from '../ecc-calculator.service';
import { ColorCodeDataService } from '../color-code-data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ecc-calculator',
  templateUrl: './ecc-calculator.component.html',
  styleUrls: ['./ecc-calculator.component.css']
  , providers: [EccCalculatorService, ColorCodeDataService]
})
export class EccCalculatorComponent {

  selectedColorA: ColorCode = new ColorCode();
  selectedColorB: ColorCode = new ColorCode();
  selectedColorC: ColorCode = new ColorCode();
  selectedColorD: ColorCode = new ColorCode();

  // @Input()
  colorCodes: ColorCode[];

  @Output()
  minResistance: number;

  @Output()
  maxResistance: number;

  constructor(private calculatorService: EccCalculatorService, private colorCodesDataService: ColorCodeDataService, private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.colorCodesDataService
    //   .getAllColorCodes()
    //   .subscribe(
    //     (colorCodes) => {
    //       this.colorCodes = colorCodes;
    //     }
    //   );

    this.route.data
      .map((data) => data['colorCodes'])
      .subscribe(
      (colorCodes) => {
        this.colorCodes = colorCodes;
      }
      );
  }

  onSelectColorComplete(color) {
    let title = color.title;
    if (title === "bandAColor") {
      this.selectedColorA = color.colorCode;
    } else if (title === "bandBColor") {
      this.selectedColorB = color.colorCode;
    } else if (title === "bandCColor") {
      this.selectedColorC = color.colorCode;
    } else if (title === "bandDColor") {
      this.selectedColorD = color.colorCode;
    }

  }

  calculate() {
    if (this.selectedColorA && this.selectedColorB && this.selectedColorD) {
      if(this.selectedColorA.name == "" || this.selectedColorB.name == "" || this.selectedColorC.name == ""){
        alert("ColorA, ColorB and ColorC are required!");
        return;
      }
      this.minResistance = this.calculatorService.getMinResistance(this.selectedColorA, this.selectedColorB, this.selectedColorC, this.selectedColorD);
      this.maxResistance = this.calculatorService.getMaxResistance(this.selectedColorA, this.selectedColorB, this.selectedColorC, this.selectedColorD);
    }
  }

}
