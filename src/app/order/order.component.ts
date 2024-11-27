import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  orderForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {
    this.orderForm = fb.group({
      name: ['', Validators.required],
      tel: ['', [Validators.required, Validators.pattern('^0[6-7][0-9]{8}$')]],
    });
  }

  get telControl() {
    return this.orderForm.get('tel');
  }

  startOrder() {
    if (this.orderForm.valid) {
      this.orderService.name.set(this.orderForm.value.name);
      this.orderService.tel.set(this.orderForm.value.tel);

      this.router.navigate(['salad'])
    }
  }
}
