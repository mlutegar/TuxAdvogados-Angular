// Módulo de serviço - Junta componentes com a mesma função

import { NgModule } from "@angular/core";
import { ClienteFormularioComponent } from "./clienteformulario/clienteformulario.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { ClienteupdateComponent } from "./clienteupdate/clienteupdate.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ExibicaoComponent } from "src/app/component/exibicao/exibicao.component";

@NgModule({
    declarations: [
        ClienteFormularioComponent,
        ClientesComponent,
        ClienteupdateComponent,
        ExibicaoComponent
    ],

    imports: [
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule
    ],

    exports: [ClientesComponent]
})

export class ClienteModule{}