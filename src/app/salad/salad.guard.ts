import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Store } from '@ngxs/store';
import { OrderStateModel } from '../store/order.state';

export const saladGuard: CanActivateFn = () => {
  // const orderService = inject(OrderService)
  const router = inject(Router)
  const store = inject(Store)

  const order = store.snapshot().order as OrderStateModel

  if(order.name && order.tel) {
    return true;
  }

  router.navigate(['/'])
  return false;
};
