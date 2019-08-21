import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'dns';
import { AngularFirestore} from '@angular/fire/firestore';
import { Usuario } from '../models/usuario/usuario';
import { UsuarioDatos } from '../models/usuario/usuario-datos';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth:AngularFireAuth,private db:AngularFirestore) { }

  login (email:string, password:string){

    return new Promise((resolve,rejected)=>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user =>{
       resolve(user);
      }).catch(err=> rejected(err));
    });
  }

  logout(){
    this.AFauth.auth.signOut();
  }

  registrarse(nombre:string, apellido:string,email:string, password:string, date:number){
    return new Promise((resolve,rejected)=>{
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res =>{
        const uid = res.user.uid;
        const usuariox = new Usuario (uid,nombre,apellido);
        var usuariod = new UsuarioDatos(uid,null,null, date, null, null);
        this.db.collection("usuarios").doc(uid).set(Object.assign({}, usuariox));
        resolve(res);
      }).catch(err=> rejected(err));
    });
  }
  
}
