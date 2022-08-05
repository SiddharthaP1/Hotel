import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { InfoComponent } from './info/info.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  {
    component: BillingComponent,
    path: 'billing'
  },
  {
    component: InfoComponent,
    path: 'info'
  },
  {
    component: OffersComponent,
    path: 'offers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
