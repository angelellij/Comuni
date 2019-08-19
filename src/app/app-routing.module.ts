import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';



const routes: Routes = [
  { path: '', loadChildren: './pages/inicio/inicio.module#InicioPageModule', canActivate:[NologinGuard] },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule', canActivate:[NologinGuard] },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate:[AuthGuard] },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate:[AuthGuard] },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule', canActivate:[NologinGuard] }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
