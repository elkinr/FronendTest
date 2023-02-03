import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { LogingComponent } from './components/loging/loging.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: LogingComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'User/:name',
    component: InfoUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
