import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.scss'
})
export class ToppingsComponent {
  @Input()
  toppings: Topping[] = [];

  @Output()
  selectTopping = new EventEmitter<Topping>()

  chooseTopping(event: MatSelectionListChange) {
    const topping = event.source.selectedOptions.selected[0].value as Topping
    this.selectTopping.emit(topping)
  }
}
