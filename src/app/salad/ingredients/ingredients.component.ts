import { Component, inject } from '@angular/core';
import { SaladService } from '../../services/salad.service';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrl: './ingredients.component.scss',
    standalone: true,
    imports: [CurrencyPipe]
})
export class IngredientsComponent {
  saladService = inject(SaladService);

  removeIngredient(id: number) {
    this.saladService.removeTopping(id);
  }
}
