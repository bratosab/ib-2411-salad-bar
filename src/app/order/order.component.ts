import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { SetName, SetTel } from '../store/order.actions';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrl: './order.component.scss',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatError,
        MatButton,
    ],
})
export class OrderComponent {
  orderForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private orderService: OrderService,
    private router: Router,
    private store: Store
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
      // this.orderService.name.set(this.orderForm.value.name);
      // this.orderService.tel.set(this.orderForm.value.tel);
      this.store.dispatch([
        new SetName(this.orderForm.value.name),
        new SetTel(this.orderForm.value.tel),
      ]);

      this.router.navigate(['salad'])
    }
  }
}
