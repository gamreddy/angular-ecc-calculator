import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { ColorCode } from '../color-code';

@Component({
  selector: 'app-band-selector-item',
  templateUrl: './band-selector-item.component.html',
  styleUrls: ['./band-selector-item.component.css']
})
export class BandSelectorItemComponent{
  
  @Input() title: String;

  @Input() colorCodes: ColorCode[];

  @Output()
  selectColor: EventEmitter<any> = new EventEmitter();

  constructor() { }

  selectColorComplete(colorCodeId: Number) {
    let colorCode = this.colorCodes.filter(x => x.id == colorCodeId).pop();
    this.selectColor.emit({'colorCode':colorCode, 'title':this.title});
  } 

}
