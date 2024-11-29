import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root',
})
export class SaladService {
  constructor(private http: HttpClient) {}

  getToppings() {
    return this.http.get<Topping[]>('https://retoolapi.dev/udhTkG/toppings');
  }

  private chosenToppingList = signal<Topping[]>([]);
  totalPrice = computed(() =>
    this.chosenToppingList().reduce((total, topping) => {
      return total + topping.price;
    }, 0)
  );

  get chosenToppings() {
    return this.chosenToppingList.asReadonly();
  }

  /**
   * chooseTopping
   * @param topping 
   * @deprecated
   */
  chooseTopping(topping: Topping) {
    this.chosenToppingList.update((list) => [...list, topping]);
    // this.chosenToppingList.update((list) => {
    //   const toppings = list.slice()
    //   toppings.push(topping)
    //   return toppings
    // })
  }

  /**
   * removeTopping
   * @param id 
   * @deprecated
   */
  removeTopping(id: number) {
    this.chosenToppingList.update((list) =>
      list.filter((topping) => topping.id !== id)
    );
  }
}
