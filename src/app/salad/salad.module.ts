import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';
import { SaladComponent } from './salad.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { SharedMaterialModule } from '../shared-material.module';
import { IngredientsComponent } from './ingredients/ingredients.component';


@NgModule({
    imports: [
        CommonModule,
        SaladRoutingModule,
        SharedMaterialModule,
        SaladComponent,
        ToppingsComponent,
        IngredientsComponent
    ]
})
export class SaladModule { }
