import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateRentalImagesPage } from './create-rental-images.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRentalImagesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateRentalImagesPage]
})
export class CreateRentalImagesPageModule {}
