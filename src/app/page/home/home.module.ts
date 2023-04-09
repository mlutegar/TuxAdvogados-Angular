import { NgModule } from '@angular/core';
import { ClienteModule } from '../cliente/cliente.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],

  imports: [
    ClienteModule,
    SharedModule
  ]
})
export class HomeModule { }
