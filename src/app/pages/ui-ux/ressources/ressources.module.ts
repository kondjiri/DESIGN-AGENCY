import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RessourcesRoutingModule } from './ressources-routing.module';
import { RessourcesComponent } from './ressources.component';
import { IconsPackComponent } from './icons-pack/icons-pack.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {MatSliderModule} from "@angular/material/slider";


@NgModule({
  declarations: [
    RessourcesComponent,
    IconsPackComponent
  ],
  imports: [
    CommonModule,
    RessourcesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatSliderModule
  ]
})
export class RessourcesModule { }
