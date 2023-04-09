import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { environment } from 'src/environments/environments';
import { ClienteModule } from './page/cliente/cliente.module';
import { LoginModule } from './page/login/login.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './page/home/home.module';
import { SobreModule } from './page/sobre/sobre.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase), // O objetivo desse import é fazer a ligação com o firebase
    SharedModule,
    ClienteModule,
    HomeModule,
    LoginModule,
    SobreModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// PAUSE EM 01H24MIN18S AULA