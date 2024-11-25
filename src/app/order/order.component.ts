import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  orderForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.orderForm = fb.group({
      name: ['', Validators.required],
      tel: ['', Validators.required]
    })
  }
}
