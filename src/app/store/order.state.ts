import { Injectable } from '@angular/core';
import { Status } from '../models/status.enum';
import { Action, State, StateContext } from '@ngxs/store';
import { SetName, SetStatus, SetTel } from './order.actions';

export interface OrderStateModel {
  name: string;
  tel: string;
  status: Status | null;
}

@State<OrderStateModel>({
  name: 'order',
  defaults: {
    name: '',
    tel: '',
    status: null,
  },
})
@Injectable()
export class OrderState {
  @Action(SetName)
  setName(context: StateContext<OrderStateModel>, action: SetName) {
    const state = context.getState();
    context.setState({ ...state, name: action.name });
    // context.patchState({ name: action.name });
  }

  @Action(SetTel)
  setTel(context: StateContext<OrderStateModel>, action: SetTel) {
    context.patchState({ tel: action.tel });
    context.dispatch(new SetStatus(Status.New));
  }

  @Action(SetStatus)
  setStatus(context: StateContext<OrderStateModel>, action: SetStatus) {
    context.patchState({
      status: action.status,
    });
  }
}
