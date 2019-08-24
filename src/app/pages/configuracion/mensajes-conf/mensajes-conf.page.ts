import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-mensajes-conf',
  templateUrl: './mensajes-conf.page.html',
  styleUrls: ['./mensajes-conf.page.scss'],
})
export class MensajesConfPage implements OnInit {

  private titulo:string = "Configurar Mensajes";

  constructor(private tabs:TabsPage) { }

  ngOnInit() {
    this.tabs.cambiarTitulo(this.titulo);
  }

}
