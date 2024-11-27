import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedMaterialModule } from './shared-material.module';
import { SaladModule } from './salad/salad.module';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SharedMaterialModule,
        SaladModule,
        OrderComponent
    ],
    providers: [
        provideAnimationsAsync(),
        provideHttpClient()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
