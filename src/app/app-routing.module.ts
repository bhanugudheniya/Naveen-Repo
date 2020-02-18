import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { DisabledComponent } from './disabled/disabled.component';
import {StartComponent } from './start/start.component'
import { MiddleComponent } from './middle/middle.component';
// import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'pricing', component:PricingComponent},
  {path:'home', component:HomeComponent},
  {path:'features', component:FeaturesComponent},
  {path:'disabled', component:DisabledComponent},
  {path:'start', component:StartComponent},
  {path:'', component:MiddleComponent},
  // {path: '', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
