import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {IvyCarouselModule} from "angular-responsive-carousel";
import {SignInComponent} from "../../../components/ui-ux/sign-in/sign-in.component";
import {SignUpComponent} from "../../../components/ui-ux/sign-up/sign-up.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
