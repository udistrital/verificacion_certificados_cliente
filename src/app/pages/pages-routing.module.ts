import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificacionInformacionComponent } from './verificacion-informacion/verificacion-informacion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'verificacion_informacion',
      component: VerificacionInformacionComponent,
    },
    {
      path: '', redirectTo: 'dashboard', pathMatch: 'full',
    },
  ]
    
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
