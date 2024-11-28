import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { SaladService } from '../services/salad.service';
import { Topping } from '../models/topping.model';
import { ToppingsComponent } from './toppings/toppings.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngxs/store';
import { OrderStateModel } from '../store/order.state';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.scss',
  standalone: true,
  imports: [ToppingsComponent, IngredientsComponent, AsyncPipe],
})
export class SaladComponent implements OnInit {
  orderService = inject(OrderService);
  saladService = inject(SaladService);
  private store = inject(Store);

  name = this.store.selectSignal<OrderStateModel['name']>(
    (state) => state.order.name
  );

  name$ = this.store.select<OrderStateModel['name']>(
    (state) => state.order.name
  );

  nameSnapshot = this.store.selectSnapshot<OrderStateModel['name']>(
    (state) => state.order.name
  );

  // toppings: Topping[] = []
  toppings$ = this.saladService.getToppings();

  ngOnInit(): void {
    // this.saladService.getToppings().subscribe(t => {
    //   this.toppings = t
    // })
  }

  selectTopping(topping: Topping) {
    this.saladService.chooseTopping(topping);
  }
}
