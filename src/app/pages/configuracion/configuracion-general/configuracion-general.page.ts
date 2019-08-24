import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-configuracion-general',
  templateUrl: './configuracion-general.page.html',
  styleUrls: ['./configuracion-general.page.scss'],
})
export class ConfiguracionGeneralPage implements OnInit {
  private titulo:string = "Configuracion"; 

  constructor(private router:Router, private tabs:TabsPage) { }

  ngOnInit() {
    this.tabs.cambiarTitulo(this.titulo);
  }

  redirectPerfilConf(){
    this.router.navigate(["tabs/perfil-conf"]);
  }
  redirectEspaciosConf(){
    this.router.navigate(["tabs/espacios-conf"]);
  }
  redirectMensajesConf(){
    this.router.navigate(["tabs/mensajes-conf"]);
  }
  redirectNotificacionesConf(){
    this.router.navigate(["tabs/notificaciones-conf"]);
  }
  redirectPrivacidadConf(){
    this.router.navigate(["tabs/privacidad-conf"]);
  }
  redirectAcercaDe(){
    this.router.navigate(["tabs/acerca-de"]);
  }
}
