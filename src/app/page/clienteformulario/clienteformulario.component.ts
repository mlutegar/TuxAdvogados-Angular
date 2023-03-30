import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servico/firebase.service';

@Component({
  selector: 'app-clienteformulario',
  templateUrl: './clienteformulario.component.html',
  styleUrls: ['./clienteformulario.component.css']
})
export class ClienteFormularioComponent implements OnInit{
  formDataDriven!: FormGroup;

  // Criando a dependencia (boa pratica para deixar o contrutor somente para injeção de dependencia)
  constructor(
    private formBuilder: FormBuilder,
    private fs: FirebaseService
    ){}

  // Método que carrega no inicio da classe tudo que tiver
  ngOnInit(): void {
    this.validaForm();
  }

  // Método estatico (ou seja, ele não se executa sozinho)
  validaForm(){
    this.formDataDriven = this.formBuilder.group({
      url_foto: ['', [Validators.required, Validators.minLength(3)]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  // Método chamado pelo submit do botão de formulario
  cadastrar(){
    try{
      this.fs.cadastrarDados(this.formDataDriven.value);
    }catch(err){
      console.log(err);
    }
  }
}
