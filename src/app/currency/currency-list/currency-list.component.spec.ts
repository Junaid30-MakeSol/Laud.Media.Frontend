import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { currencyListComponent } from './currency-list.component';

describe('UsersListComponent', () => {
  let component: currencyListComponent;
  let fixture: ComponentFixture<currencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [currencyListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(currencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
