import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  name: string = "";
  tel: string = "";

  constructor() { }
}
