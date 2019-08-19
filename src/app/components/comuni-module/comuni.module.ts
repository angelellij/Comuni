import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTabsComponent } from '../header-tabs/header-tabs.component';
import { PostResumenComponent } from '../post-resumen/post-resumen.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderTabsComponent,
    PostResumenComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HeaderTabsComponent,
    PostResumenComponent
  ]
})
export class ComuniModule { }
