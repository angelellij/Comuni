import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'dns';
import { AngularFirestore} from '@angular/fire/firestore';

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

  registrarse(nombre:string, apellido:string,email:string, password:string){
    return new Promise((resolve,rejected)=>{
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(user =>{
        resolve(user);
      }).catch(err=> rejected(err));
    });
  }
  
}
