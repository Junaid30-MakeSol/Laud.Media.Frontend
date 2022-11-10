import { NgModule } from '@angular/core';
import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyComponent,  } from './currency.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooleanPipe } from '../pipes/boolean.pipe';

@NgModule({
  imports: [
    CurrencyRoutingModule,
    UiSwitchModule,
    FontAwesomeModule,
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CurrencyComponent, CurrencyListComponent, BooleanPipe],
  exports: [CurrencyListComponent],
})
export class CurrencyModule {}
