import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-notificaciones-conf',
  templateUrl: './notificaciones-conf.page.html',
  styleUrls: ['./notificaciones-conf.page.scss'],
})
export class NotificacionesConfPage implements OnInit {

  private titulo:string = "Configurar Notificaciones";

  constructor(private tabs:TabsPage) { }

  ngOnInit() {
    this.tabs.cambiarTitulo(this.titulo);
  }

}
