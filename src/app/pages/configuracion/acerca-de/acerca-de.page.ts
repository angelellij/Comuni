import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {
  private titulo:string = "Acerca De";

  constructor(private tabs:TabsPage) { }

  ngOnInit() {
    this.tabs.cambiarTitulo(this.titulo);
  }

}
