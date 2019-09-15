import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListGatewayComponent } from './components/gateway/list-gateway/list-gateway.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gateway',
    component: ListGatewayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
