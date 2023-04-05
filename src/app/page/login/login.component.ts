import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = "Login";
  nameButtonForm = "Logar";
  nameButtonCad = "Não tem conta? Clique aqui!"

  // LOGIN PARA CADASTRO
  alterar(){
    if(this.title == "Login"){
      this.title = "Cadastre-se"
    }
  }

}
