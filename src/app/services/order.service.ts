import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // name: string = "";
  // tel: string = "";

  name = signal<string>('')
  tel = signal<string>('')

  constructor() { }

  dosomething( ) {
    return "it worked"
  }
}
