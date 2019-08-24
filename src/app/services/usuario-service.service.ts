import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  usuariox = new Usuario(null, null, null);

  constructor(private db:AngularFirestore) { }

leerUsuarioXId(uid:string){
  //this.db.collection("usuarios").doc(uid).get(Object.assign({}, this.usuariox));
  }
}
