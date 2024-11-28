import { Injectable } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { State } from '@ngxs/store';

export interface SaladStateModel {
  toppings: Topping[];
  chosenToppings: Topping[];
  error: string | null;
}

@State<SaladStateModel>({
  name: 'salad',
  defaults: {
    toppings: [],
    chosenToppings: [],
    error: null,
  },
})
@Injectable()
export class SaladState {}
