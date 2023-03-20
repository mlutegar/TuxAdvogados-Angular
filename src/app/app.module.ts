import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExibicaoComponent } from './exibicao/exibicao.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SobreComponent } from './sobre/sobre.component';

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
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }