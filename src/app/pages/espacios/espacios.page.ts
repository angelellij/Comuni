import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.page.html',
  styleUrls: ['./espacios.page.scss'],
})
export class EspaciosPage implements OnInit {
  private titulo:string = "Espacios";

  constructor(private tabs:TabsPage) { }

  ngOnInit() {
    this.tabs.cambiarTitulo(this.titulo);
  }

}
