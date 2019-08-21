import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'espacios',
        children: [
          {
            path: '',
            loadChildren: '../espacios/espacios.module#EspaciosPageModule'
          }
        ]
      },
      {
        path: 'mensajes',
        children: [
          {
            path: '',
            loadChildren: '../mensajes/mensajes.module#MensajesPageModule'
          }
        ]
      },
      {
        path: 'notificaciones',
        children: [
          {
            path: '',
            loadChildren: '../notificaciones/notificaciones.module#NotificacionesPageModule'
          }
        ]
      },
      {
        path: 'configuracion-general',
        children: [
          {
            path: '',
            loadChildren: '../configuracion/configuracion-general/configuracion-general.module#ConfiguracionGeneralPageModule'
          }
        ]
      },
      {
        path: 'perfil-conf',
        children: [
          {
            path: '',
            loadChildren: '../configuracion/perfil-conf/perfil-conf.module#PerfilConfPageModule'
          }
        ]
      },
      {
        path: 'espacios-conf',
        children: [
          {
            path: '',
            loadChildren: '../configuracion/espacios-conf/espacios-conf.module#EspaciosConfPageModule'
          }
        ]
      },
      {
        path: 'mensajes-conf',
        children: [
          {
            path: '',
            loadChildren: '../configuracion/mensajes-conf/mensajes-conf.module#MensajesConfPageModule'
          }
        ]
      },
      {
        path: 'notificaciones-conf',
        children: [
          {
            path: '',
            loadChildren: '../configuracion/notificaciones-conf/notificaciones-conf.module#NotificacionesConfPageModule'
          }
        ]
      },
      {
        path: 'privacidad-conf',
        children: [
          {
            path: '',
            loadChildren: '../configuracion/privacidad-conf/privacidad-conf.module#PrivacidadConfPageModule'
          }
        ]
      },
      {
        path: 'acerca-de',
        children: [
          {
            path: '',
            loadChildren: '../configuracion/acerca-de/acerca-de.module#AcercaDePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
