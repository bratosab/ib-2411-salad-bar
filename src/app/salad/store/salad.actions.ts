import { Topping } from '../../models/topping.model';

export namespace Toppings {
  export class Choose {
    static readonly type = '[Salad] Choose Topping';
    constructor(public topping: Topping) {}
  }

  export class Fetch {
    static readonly type = '[Salad] Fetch Toppings';
  }
}
