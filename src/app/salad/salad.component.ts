import { Component, inject } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.scss'
})
export class SaladComponent {
  orderService = inject(OrderService)

  
}
