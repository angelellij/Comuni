import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-perfil-conf',
  templateUrl: './perfil-conf.page.html',
  styleUrls: ['./perfil-conf.page.scss'],
})
export class PerfilConfPage implements OnInit {

  private titulo:string = "Mi Perfil";

  constructor(private tabs:TabsPage) { }

  ngOnInit() {
    this.tabs.cambiarTitulo(this.titulo);
  }

}
