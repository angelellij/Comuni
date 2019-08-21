import { Input, Component, OnInit } from '@angular/core';
import { HeaderListadoComponent } from '../header-listado/header-listado.component';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.scss'],
})
export class HeaderTabsComponent implements OnInit {
  @Input() titulo:string;

  constructor() { }

  ngOnInit() {}

  mostrarHeaderListado(){
    var x = document.getElementById("app-header-listado");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
}
