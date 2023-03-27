import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ExibicaoComponent } from './component/exibicao/exibicao.component';
import { FormularioComponent } from './page/formulario/formulario.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ClientesComponent } from './page/clientes/clientes.component';
import { environment } from 'src/environments/environments.prod';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExibicaoComponent,
    FormularioComponent,
    SobreComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase) // O objetivo desse import é fazer a ligação com o firebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }