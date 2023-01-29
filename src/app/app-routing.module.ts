import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdministrationModule} from "./pages/administration/administration.module";
import {AuthentificationModule} from "./pages/authentification/authentification.module";
import {UiUxModule} from "./pages/ui-ux/ui-ux.module";
import {AppModule} from "./app.module";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/ui-ux/ui-ux.module').then(m=>m.UiUxModule),
  },
  {
    path:'authentification',
    loadChildren: () => import('./pages/authentification/authentification.module').then(m=>m.AuthentificationModule)
  },
  {
    path:'administration',
    loadChildren: () => import('./pages/administration/administration.module').then(m=>m.AdministrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
