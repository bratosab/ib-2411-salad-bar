import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SaladModule } from './app/salad/salad.module';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { SaladRoutingModule } from './app/salad/salad-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule, SaladRoutingModule),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
