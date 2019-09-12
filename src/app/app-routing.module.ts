import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from './components/about/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';
import { ListComponent as GatewayList } from './components/gateway/list/list.component';
import { ListComponent as DeviceList} from './components/devices/list/list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gateway',
    component: GatewayList
  },
  {
    path: 'device',
    component: DeviceList
  },
  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
