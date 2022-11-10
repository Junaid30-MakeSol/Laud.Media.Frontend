import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';

const childrenRoutes: Routes = [
  {
    path: '',
    component: CurrencyListComponent,
  },
];

const routes: Routes = [
  {
    path: '',
    component: CurrencyComponent,
    children: childrenRoutes,
    data: {
      title: 'Currency',
      
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CurrencyRoutingModule {}
