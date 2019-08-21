import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion-general',
  templateUrl: './configuracion-general.page.html',
  styleUrls: ['./configuracion-general.page.scss'],
})
export class ConfiguracionGeneralPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
