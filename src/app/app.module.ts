import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ExibicaoComponent } from './page/exibicao/exibicao.component';
import { FormularioComponent } from './page/formulario/formulario.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exibicao', component: ExibicaoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExibicaoComponent,
    FormularioComponent,
    SobreComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }