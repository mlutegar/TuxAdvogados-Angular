import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES
import { ClientesComponent } from './page/cliente/clientes/clientes.component';
import { ClienteFormularioComponent } from './page/cliente/clienteformulario/clienteformulario.component';
import { HomeComponent } from './page/home/home.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { ClienteupdateComponent } from './page/cliente/clienteupdate/clienteupdate.component';
import { LoginComponent } from './page/login/login.component';
import { RouterGuard } from './guardRouters/router.guard';
import { LoginGuard } from './guardRouters/login.guard';

// ROTAS
const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent, canActivate: [RouterGuard]},
  { path: 'clientes', component: ClientesComponent, canActivate: [RouterGuard] },
  { path: 'clienteformulario', component: ClienteFormularioComponent, canActivate: [RouterGuard] },
  { path: 'sobre', component: SobreComponent, canActivate: [RouterGuard] },
  { path: 'update/:id', component: ClienteupdateComponent}
];

// MÓDULO
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
