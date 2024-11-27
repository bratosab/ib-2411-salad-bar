import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SaladRoutingModule } from './salad/salad-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes as appRoutes } from './app.routes';
import { routes as saladRoutes } from './salad/salad.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter([...appRoutes, ...saladRoutes]),
  ],
};
