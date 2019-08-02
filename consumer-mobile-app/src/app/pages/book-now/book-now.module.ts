import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookNowPage } from './book-now.page';
import { AuthGuard } from '../../auth/auth.guard'

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: BookNowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookNowPage]
})
export class BookNowPageModule {}
