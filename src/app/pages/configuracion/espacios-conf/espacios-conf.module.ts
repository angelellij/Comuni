import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EspaciosConfPage } from './espacios-conf.page';
import { ComuniModule } from 'src/app/components/comuni-module/comuni.module';

const routes: Routes = [
  {
    path: '',
    component: EspaciosConfPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComuniModule
  ],
  declarations: [EspaciosConfPage]
})
export class EspaciosConfPageModule {}
