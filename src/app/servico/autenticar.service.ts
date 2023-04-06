import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  autenticarUser(){} // autenticador
  cadastrarUser(user){ // criador de usuario
    return this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password);
  }
  logout(){}
}
