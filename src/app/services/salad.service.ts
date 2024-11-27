import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class SaladService {

  constructor(private http: HttpClient) { }

  getToppings() {
    return this.http.get<Topping[]>('https://retoolapi.dev/udhTkG/toppings')
  }

  private chosenToppingList = signal<Topping[]>([])

  get chosenToppings() {
    return this.chosenToppingList.asReadonly()
  }

  chooseTopping(topping: Topping) {
    this.chosenToppingList.update((list) => [...list, topping])
    // this.chosenToppingList.update((list) => {
    //   const toppings = list.slice()
    //   toppings.push(topping)
    //   return toppings
    // })
  }

  removeTopping(id: number) {
    this.chosenToppingList.update(list => list.filter(topping => topping.id !== id))
  }

}
