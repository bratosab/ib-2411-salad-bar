import { Component, inject } from '@angular/core';
import { SaladService } from '../../services/salad.service';
import { CurrencyPipe } from '@angular/common';
import { Store } from '@ngxs/store';
import { SaladStateModel } from '../store/salad.state';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss',
  standalone: true,
  imports: [CurrencyPipe],
})
export class IngredientsComponent {
  private store = inject(Store);
  saladService = inject(SaladService);

  chosenToppings = this.store.selectSignal<SaladStateModel['chosenToppings']>(
    (state) => state.salad.chosenToppings
  );

  removeIngredient(id: number) {
    this.saladService.removeTopping(id);
  }
}
