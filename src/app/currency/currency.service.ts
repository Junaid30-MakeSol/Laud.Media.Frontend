import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class currencyService {
  requestBody: any = {
    CurrentPage: 1,
    PageSize: 20,
    SearchTerm: '',
    SortBy: 'Name',
    SortOrder: 'ASC',
  };

  @Output()
  updateUsers: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  getList(){
    return this.httpClient.get<any[]>('/api/currency/list');
  }

  create(currency: any) {
    return this.httpClient.post('/api/currency/create', currency);
  }
  update(currency: any) {
    return this.httpClient.put('/api/currency/update', currency);
  }
  delete(guid: any) {
    return this.httpClient.delete(`/api/currency/delete/${guid}`);
  }
}
