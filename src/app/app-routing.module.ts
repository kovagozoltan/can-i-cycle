import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';


import { LoginComponent } from './login/login.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { DetailsComponent } from './details/details.component';
import { RateComponent } from './rate/rate.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'weather',
    component: CurrentWeatherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'details',
    component: DetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rate',
    component: RateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
