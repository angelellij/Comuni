import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  email:string;
  password:string;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.login(this.email,this.password).then(res=>{
      this.router.navigate(['tabs']);
    }).catch(err=>alert("Los datos ingresados no coinciden"));
  }

  redirectRegistrarse(){
    this.router.navigate(["registro"]);
  }

}
