import { TestBed } from '@angular/core/testing';

import { SaladService } from './salad.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Topping } from '../models/topping.model';

describe('SaladService', () => {
  let service: SaladService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(SaladService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getToppings() should return a topping list', (done: DoneFn) => {
    const mockToppings: Topping[] = [{ id: 0, name: 'Carrots', price: 999 }];

    service.getToppings().subscribe((toppings) => {
      console.log(toppings);
      expect(toppings).toEqual(mockToppings);
      done();
    });

    const intercept = httpTesting.expectOne(
      'https://retoolapi.dev/udhTkG/toppings'
    );

    expect(intercept.request.method).toEqual('GET');
    intercept.flush(mockToppings)
  });
});
