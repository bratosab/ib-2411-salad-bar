import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes as appRoutes } from './app.routes';
import { routes as saladRoutes } from './salad/salad.routes';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsRouterPlugin } from '@ngxs/router-plugin';
import { provideStore } from '@ngxs/store';
import { OrderState } from './store/order.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter([...appRoutes, ...saladRoutes]),
    provideStore([OrderState], withNgxsReduxDevtoolsPlugin(), withNgxsRouterPlugin()),
  ],
};
