import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrivacidadConfPage } from './privacidad-conf.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacidadConfPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrivacidadConfPage]
})
export class PrivacidadConfPageModule {}
