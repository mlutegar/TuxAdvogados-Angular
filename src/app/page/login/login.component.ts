import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      alert("Login");
      this.autenticaService.autenticarUser(this.formulario.value); // Autenticar o usuario existente

      this.autenticaService.detalesUser().user.subscribe(results => this.usuario = "Usuario: " + results.email);

      //this.router.navigate(['/home']); // Redireciona para a página

    } else if(this.nameButtonForm == "Cadastrar"){
      alert("Cadastrado com sucesso!");
      this.autenticaService.cadastrarUser(this.formulario.value); // cadastrar o usuario
      this.router.navigate(['/']); // Levar para a tela de login
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