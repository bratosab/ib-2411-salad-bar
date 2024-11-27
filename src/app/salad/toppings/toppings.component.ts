import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { MatSelectionListChange, MatSelectionList, MatListOption } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-toppings',
    templateUrl: './toppings.component.html',
    styleUrl: './toppings.component.scss',
    standalone: true,
    imports: [MatSelectionList, MatListOption, CurrencyPipe]
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
