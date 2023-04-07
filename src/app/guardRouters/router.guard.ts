import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AutenticarService } from '../servico/autenticar.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {

  constructor(
    private autenticar: AutenticarService,
    private routerControl: Router
  ){}

  // PROMISE
  // é um objeto em javascript que permite a execução de processamentos de forma assincrona dentro do seu código
  canActivate(): Promise<boolean>{
    return new Promise( results => {
      this.autenticar.detalesUser().onAuthStateChanged(user => {
        if(!user) this.routerControl.navigate(['']);
        results(user ? true: false);
      });
    })
  }

}

//45:51