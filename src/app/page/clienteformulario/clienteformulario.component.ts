import { Component, OnInit} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clienteformulario',
  templateUrl: './clienteformulario.component.html',
  styleUrls: ['./clienteformulario.component.css']
})
export class ClienteFormularioComponent implements OnInit{
  formDataDriven!: FormGroup;

  // Variavel que recebe e manipula as coleções do firestore
  clienteCollection!: AngularFirestoreCollection;

  // Criando a dependencia (boa pratica para deixar o contrutor somente para injeção de dependencia)
  constructor(private formBuilder: FormBuilder, private af: AngularFirestore) {  }

  // Método que carrega no inicio da classe tudo que tiver
  ngOnInit(): void {
       // Apresentação
       this.clienteCollection = this.af.collection("clientes");
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
  cadastrar() {
    this.clienteCollection.add(this.formDataDriven.value);
    console.log(this.formDataDriven.value);
  }

  form(formulario: any){
    console.log(formulario.value);
  }
}
