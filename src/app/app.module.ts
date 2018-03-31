import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { EccCalculatorComponent } from './ecc-calculator/ecc-calculator.component';
import { BandSelectorItemComponent } from './band-selector-item/band-selector-item.component';
import { EccCalculatorService } from './ecc-calculator.service';
import { AppRoutingModule } from './app-routing.module';
import { EccCalculatorHeaderComponent } from './ecc-calculator-header/ecc-calculator-header.component';
import { EccCalculatorIntroComponent } from './ecc-calculator-intro/ecc-calculator-intro.component';
import { EccCalculatorAboutComponent } from './ecc-calculator-about/ecc-calculator-about.component';

@NgModule({
  declarations: [
    AppComponent,
    EccCalculatorComponent,
    BandSelectorItemComponent,
    EccCalculatorHeaderComponent,
    EccCalculatorIntroComponent,
    EccCalculatorAboutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ApiService, EccCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
