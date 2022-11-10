import { Component, OnInit, ViewChild } from '@angular/core';
import { currencyService } from '../currency.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ConfirmService } from 'src/app/@shared/confirm-dialog/confirm.service';
import { ToastrService } from 'ngx-toastr';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})
export class CurrencyListComponent implements OnInit {
  isLoading!: boolean;
  currencies: any;
  delete = faTimes;
  constructor(
    private _CompanyService: currencyService,
    private fb: FormBuilder,
    private alertService: ConfirmService,
    private toastr: ToastrService,

  ) {
  }

  ngOnInit() {
    this.searchCurrencies();
    this.isLoading = true;
  }

  public searchCurrencies() {
    this._CompanyService.getList().subscribe((result) => {
      this.currencies = result;
      
    });
  }

  public currencyCreated() {
    this.searchCurrencies();
  }

  currencyChange(obj: any) {
    const index = this.currencies.findIndex((x: any) => x.Id === obj.Id);
    this.currencies[index] = obj;
  }

  deleteCurrency(e: any, id: number) {
    e.stopPropagation();
    e.preventDefault();
    this.alertService.confirm().then((result: any) => {
      if (result.value) {
        this._CompanyService.delete(id).subscribe(() => {
          this.toastr.success('Currency er slettet', 'Slett');
          this.searchCurrencies();
        });
      }
    });
  }
}
