import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/servico/firebase.service';

@Component({
  selector: 'app-clienteupdate',
  templateUrl: './clienteupdate.component.html',
  styleUrls: ['./clienteupdate.component.css']
})
export class ClienteupdateComponent implements OnInit{

  updateForm: FormGroup;
  routeId = null; // Aqui é guardado o :id
  constructor(
    private activated: ActivatedRoute, // Usamos o ActivatedRouted para capturar a rota ativa
    private fs: FirebaseService,
    private formBuilder: FormBuilder
    ){}

  ngOnInit(): void{
    this.routeId = this.activated.snapshot.params['id'];

    if(this.routeId){
      this.fs.consultaUm(this.routeId).subscribe(caixinha => console.log(caixinha))
    }

    this.createForm();
  }

  createForm(){
    this.updateForm = this.formBuilder.group({
      url_foto: [''],
      nome: [''],
      email: [''],
      telefone: ['']
    })
  }

  atualizar(){
    
  }


}
