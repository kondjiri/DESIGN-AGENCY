import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiUxRoutingModule } from './ui-ux-routing.module';
import { UiUxComponent } from './ui-ux.component';
import {HeaderComponent} from "../../components/ui-ux/header/header.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {FooterComponent} from "../../components/ui-ux/footer/footer.component";


@NgModule({
  declarations: [
    UiUxComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UiUxRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class UiUxModule { }
