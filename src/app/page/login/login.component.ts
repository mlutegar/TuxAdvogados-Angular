import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticarService } from 'src/app/servico/autenticar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // VARIAVEIS ALTERAVEIS
  title = "Login";
  nameButtonForm = "Logar";
  nameButtonCad = "Não tem conta? Clique aqui!";

  // GUARDANDO INFORMAÇÕES
  formulario: FormGroup
  constructor(
    private FormBuilder: FormBuilder,
    private autenticaService: AutenticarService){}

  // FUNÇÃO QUE CHAMA O CREATFORM ASSIM QUE A PÁGINA LOGIN FOR CHAMADO
  ngOnInit(): void {
      this.createForm();
  }

  // FUNÇÃO QUE CAPTURA OS DADOS E VALIDA OS DADOS
  createForm(){
    this.formulario = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  // MÉTODO CHAMADO PELO INPUT
  formAuth(){
    if (this.nameButtonForm == "Logar") {
      alert("Login");
    } else if(this.nameButtonForm == "Cadastrar"){
      alert("Cadastrado com sucesso!");
      this.autenticaService.cadastrarUser(this.formulario.value);
    } else{
      alert("Opção invalida");
    }
  }

  // FUNÇÃO PARA ALTERAR AS VARIAVEIS ALTERAVEIS
  alterar(){
    if(this.title == "Login"){
      this.title = "Cadastre-se";
      this.nameButtonForm = "Cadastrar";
      this.nameButtonCad = "Já tenho conta!";
    } else {
      this.title = "Login";
      this.nameButtonForm = "Logar"
      this.nameButtonCad = "Não possui conta? Clique aqui";
    }
  }



}

// 2H 4MIN 20SEG