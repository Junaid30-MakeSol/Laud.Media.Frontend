import { Component, OnInit, ViewChild } from '@angular/core';
import { currencyService } from '../currency.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})
export class CurrencyListComponent implements OnInit {
  formGroup!: FormGroup;
  results: any;
  isLoading!: boolean;
  currencies: any;
  page = 1;
  total!: number;
  itemsPerPage = 20;
  totalPages = 1;
  SearchTerm: any;
  // delete = faTimes;
  userModelRequest = {
    CurrentPage: 1,
    PageSize: 20,
    SearchTerm: '',
    SortBy: 'Name',
    SortOrder: 'ASC',
  };

  tempRequestModel: any;
  searchForm!: FormGroup;
  constructor(
    private _CompanyService: currencyService,
    private fb: FormBuilder,
  ) {
    this.tempRequestModel = this._CompanyService.requestBody;
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: new FormControl(''),
    });
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

  // deletecurrency(e: any, id: number) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   this.alertService.confirm().then((result) => {
  //     if (result.value) {
  //       this._CompanyService.delete(id).subscribe(() => {
  //         this.toastr.success('Kurset er slettet', 'Slett');
  //         this.searchcurrencys(1);
  //       });
  //     }
  //   });
  // }
}
