import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre:string;
  apellido:string;
  email:string;
  email2:string;
  password:string;
  password2:string;



  constructor(private route:Router, private auth:AuthService) { }

  ngOnInit() {
  }

  onSubmitRegistro(){
    if(
      isNullOrUndefined(this.nombre)||
      isNullOrUndefined(this.apellido) || 
      isNullOrUndefined(this.email) ||
      isNullOrUndefined(this.email2) ||
      isNullOrUndefined(this.password) ||
      isNullOrUndefined(this.password2)
      ){
        alert("Debe ingresar todos los datos.");
      }
    else if ((this.email != this.email2)||(this.password != this.password2)){
      alert("Los datos no coinciden");
    }
    else{
      this.auth.registrarse(this.nombre,this.apellido,this.email,this.password).then( ()=>{
        this.route.navigate(['tabs']);
      }).catch(err => console.log(err));
    }
  }

  redirectInicio(){
    this.route.navigate(['inicio']);
  }
}
