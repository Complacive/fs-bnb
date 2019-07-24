import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'existing-rentals', loadChildren: './pages/existing-rentals/existing-rentals.module#ExistingRentalsPageModule' },
  { path: 'create-rental', loadChildren: './pages/create-rental/create-rental.module#CreateRentalPageModule' },
  { path: 'update-rental', loadChildren: './pages/update-rental/update-rental.module#UpdateRentalPageModule' },
  { path: 'rental-details', loadChildren: './pages/rental-details/rental-details.module#RentalDetailsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
