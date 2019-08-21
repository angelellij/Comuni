import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header-listado',
  templateUrl: './header-listado.component.html',
  styleUrls: ['./header-listado.component.scss'],
})
export class HeaderListadoComponent implements OnInit { 

  constructor(private router:Router, private AFauth:AngularFireAuth) { }

  ngOnInit() {}

  redirigirPerfil(){
    console.log("Va al perfil");
    //this.router.navigate("Perfil");
  }

  redirigirConfiguracion(){
    console.log("Va al configuracion");
    //this.router.navigate("configuracion");
  }

  onLogout(){
    this.AFauth.auth.signOut().then(()=>{
      this.router.navigate(['inicio'])
    });   
  }
}
