import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/component/header/header.component';
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
  usuario = "";

  // GUARDANDO INFORMAÇÕES
  formulario: FormGroup
  constructor(
    private FormBuilder: FormBuilder,
    private autenticaService: AutenticarService,
    private router: Router
    ){}

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
      alert("Logado com sucesso!");
      this.autenticaService.autenticarUser(this.formulario.value); // Autenticar o usuario existente

    } else if(this.nameButtonForm == "Cadastrar"){
      alert("Cadastrado com sucesso!");
      this.autenticaService.cadastrarUser(this.formulario.value); // cadastrar o usuario

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

// 53min56seg