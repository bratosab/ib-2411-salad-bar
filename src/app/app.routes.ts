import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
  },
  {
    path: 'kitchen',
    loadComponent: () =>
      import('./kitchen/kitchen.component').then((m) => m.KitchenComponent),
  },
];
