import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  private titulo:string = "Mensajes";

  constructor(private tabs:TabsPage) { }

  ngOnInit() {
    this.tabs.cambiarTitulo(this.titulo);
  }

}
