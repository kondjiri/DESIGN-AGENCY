import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RessourcesComponent} from "./ressources.component";
import {IconsPackComponent} from "./icons-pack/icons-pack.component";

const routes: Routes = [
  {
    path : '',
    component : RessourcesComponent,
    children:[
      {
        path: 'icons',
        component : IconsPackComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourcesRoutingModule { }
