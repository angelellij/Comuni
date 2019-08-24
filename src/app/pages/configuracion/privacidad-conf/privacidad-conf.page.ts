import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-privacidad-conf',
  templateUrl: './privacidad-conf.page.html',
  styleUrls: ['./privacidad-conf.page.scss'],
})
export class PrivacidadConfPage implements OnInit {

  private titulo:string = "Configurar Privacidad";

  constructor(private tabs:TabsPage) { }

  ngOnInit() {
    this.tabs.cambiarTitulo(this.titulo);
  }

}
