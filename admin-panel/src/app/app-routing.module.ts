import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ServiceProvidersComponent } from './components/service-providers/service-providers.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'service-providers', component: ServiceProvidersComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }