import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import { provideStore } from '@ngxs/store';
import { OrderState } from '../store/order.state';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderComponent],
      providers: [provideStore([OrderState]), provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with two controls', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form[data-test="order-form"]')).toBeTruthy();
    expect(
      compiled.querySelectorAll('mat-form-field input[matInput]')
    ).toHaveSize(2);
  });
});
