import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibicaoComponent } from './page/exibicao/exibicao.component';
import { FormularioComponent } from './page/formulario/formulario.component';
import { HomeComponent } from './page/home/home.component';
import { SobreComponent } from './page/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exibicao', component: ExibicaoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
