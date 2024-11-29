import { inject, Injectable } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { Action, State, StateContext } from '@ngxs/store';
import { Toppings } from './salad.actions';
import { SaladService } from '../../services/salad.service';
import { catchError, of, tap } from 'rxjs';

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
export class SaladState {
  private saladService = inject(SaladService);

  @Action(Toppings.Fetch)
  fetchToppings(
    context: StateContext<SaladStateModel>,
    action: Toppings.Fetch
  ) {
    return this.saladService.getToppings().pipe(
      tap((toppings) => {
        context.patchState({ toppings: toppings });
      }),
      catchError((error) => {
        context.patchState({ error: error });
        return of([]);
      })
    );
  }

  @Action(Toppings.Choose)
  chooseTopping(
    context: StateContext<SaladStateModel>,
    action: Toppings.Choose
  ) {
    const state = context.getState();

    console.log('index of', state.chosenToppings.indexOf(action.topping))
    console.log('includes', state.chosenToppings.includes(action.topping))
    console.log('some id', state.chosenToppings.some((topping) => topping.id === action.topping.id))

    if (
      !state.chosenToppings.some((topping) => topping.id === action.topping.id)
    ) {
      context.patchState({
        chosenToppings: [...state.chosenToppings, action.topping],
      });
    }
  }
}
