import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTabsComponent } from '../header-tabs/header-tabs.component';
import { PostResumenComponent } from '../post-resumen/post-resumen.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderListadoComponent } from '../header-listado/header-listado.component';


@NgModule({
  declarations: [
    HeaderTabsComponent,
    HeaderListadoComponent,
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
    PostResumenComponent,
    HeaderListadoComponent
  ],
  entryComponents:[
    HeaderListadoComponent
  ]
})
export class ComuniModule { }
