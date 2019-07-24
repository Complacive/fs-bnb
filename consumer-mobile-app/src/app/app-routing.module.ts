import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'listings', loadChildren: './pages/listings/listings.module#ListingsPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  //{ path: 'pages', loadChildren: './pages/pages.module#PagesPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'listing-details', loadChildren: './pages/listing-details/listing-details.module#ListingDetailsPageModule' },
  { path: 'book-now', loadChildren: './pages/book-now/book-now.module#BookNowPageModule' },
  //{ path: 'auth.service', loadChildren: './services/auth.service/auth.service.module#Auth.ServicePageModule' },
  //{ path: 'auth.service', loadChildren: './services/auth.service/auth.service.module#Auth.ServicePageModule' },
];
//// comment 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
