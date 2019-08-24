import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-espacios-conf',
  templateUrl: './espacios-conf.page.html',
  styleUrls: ['./espacios-conf.page.scss'],
})
export class EspaciosConfPage implements OnInit {

  private titulo:string = "Configurar Espacios";

  constructor(private tabs:TabsPage) { }

  ngOnInit() {
    this.tabs.cambiarTitulo(this.titulo);
  }

}
