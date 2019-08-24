import { Input, Component, OnInit } from '@angular/core';
import { HeaderListadoComponent } from '../header-listado/header-listado.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.scss'],
})
export class HeaderTabsComponent implements OnInit {
  @Input() titulo:string;

  constructor(private popoverController:PopoverController) { }

  ngOnInit() {}

  async mostrarHeaderListado(ev:any){
  
      const popover = await this.popoverController.create({
        component: HeaderListadoComponent,
        event: ev,
        translucent: true
      });
      return await popover.present();
    }
  //   var x = document.getElementById("app-header-listado");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }
  
}
