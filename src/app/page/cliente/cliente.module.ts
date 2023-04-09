// Módulo de serviço - Junta componentes com a mesma função

import { NgModule } from "@angular/core";
import { ClienteFormularioComponent } from "./clienteformulario/clienteformulario.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { ClienteupdateComponent } from "./clienteupdate/clienteupdate.component";
import { ExibicaoComponent } from "src/app/component/exibicao/exibicao.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        ClienteFormularioComponent,
        ClientesComponent,
        ClienteupdateComponent,
        ExibicaoComponent
    ],

    imports: [SharedModule],

    exports: [ClientesComponent]
})

export class ClienteModule{}