import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './page/home/home.component';
import { ExibicaoComponent } from './component/exibicao/exibicao.component';
import { ClienteFormularioComponent } from './page/clienteformulario/clienteformulario.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ClientesComponent } from './page/clientes/clientes.component';
import { environment } from 'src/environments/environments';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExibicaoComponent,
    ClienteFormularioComponent,
    SobreComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // O objetivo desse import é fazer a ligação com o firebase

    // Agora vou importar o AngularFirestorModule, que é responsavel por fornecer as ferramentas dos banco de dados
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }