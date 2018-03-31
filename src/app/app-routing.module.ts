import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {EccCalculatorComponent} from './ecc-calculator/ecc-calculator.component';
import {ColorCodesResolver} from './colorCodes.resolver';
import {ColorCodeDataService} from './color-code-data.service';
import {EccCalculatorIntroComponent} from './ecc-calculator-intro/ecc-calculator-intro.component';
import {EccCalculatorAboutComponent} from './ecc-calculator-about/ecc-calculator-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'calculator',
    component: EccCalculatorComponent,
    resolve:{
      colorCodes: ColorCodesResolver
    }
  },
  {
    path: 'intro',
    component: EccCalculatorIntroComponent
  },
  {
    path: 'about',
    component: EccCalculatorAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ColorCodesResolver, ColorCodeDataService]
})
export class AppRoutingModule {
}