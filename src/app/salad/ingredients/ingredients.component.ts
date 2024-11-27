import { Component, inject } from '@angular/core';
import { SaladService } from '../../services/salad.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {
  saladService = inject(SaladService);

  removeIngredient(id: number) {
    this.saladService.removeTopping(id);
  }
}
