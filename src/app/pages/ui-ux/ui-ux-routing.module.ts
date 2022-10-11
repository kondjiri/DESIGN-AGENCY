import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UiUxComponent} from "./ui-ux.component";

const routes: Routes = [
  {
    path:'',
    component:UiUxComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule)
      },
      {
        path: 'ressources',
        loadChildren: () => import('./ressources/ressources.module').then(m=>m.RessourcesModule)
      },
      {
        path:'home',
        loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiUxRoutingModule { }
