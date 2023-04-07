import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire/compat';

import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';

import { ExibicaoComponent } from './component/exibicao/exibicao.component';
import { ClienteFormularioComponent } from './page/cliente/clienteformulario/clienteformulario.component';
import { SobreComponent } from './page/sobre/sobre.component';

import { FooterComponent } from './component/footer/footer.component';
import { ClientesComponent } from './page/cliente/clientes/clientes.component';
import { environment } from 'src/environments/environments';
import { ClienteupdateComponent } from './page/cliente/clienteupdate/clienteupdate.component';
import { LoginComponent } from './page/login/login.component';

import { ClienteModule } from './page/cliente/cliente.module';
import { HomeModule } from './page/home/home.module';
import { LoginModule } from './page/login/login.module';
import { SobreModule } from './page/sobre/sobre.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // O objetivo desse import é fazer a ligação com o firebase
    AngularFirestoreModule, // Agora vou importar o AngularFirestorModule, que é responsavel por fornecer as ferramentas dos banco de dados
    AngularFireAuthModule, // responsabel por autenticar
    ClienteModule,
    HomeModule,
    LoginModule,
    SobreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }