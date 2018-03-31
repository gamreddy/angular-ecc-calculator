import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandSelectorItemComponent } from './band-selector-item.component';

describe('BandSelectorItemComponent', () => {
  let component: BandSelectorItemComponent;
  let fixture: ComponentFixture<BandSelectorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandSelectorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandSelectorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
