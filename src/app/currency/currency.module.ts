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
import { ConfirmService } from '../@shared/confirm-dialog/confirm.service';
import { ConfirmDialogComponent } from '../@shared/confirm-dialog/confirm-dialog.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
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
  providers: [
    ConfirmService,
    ToastrService

  ],
  entryComponents: [ConfirmDialogComponent],
})
export class CurrencyModule {}
