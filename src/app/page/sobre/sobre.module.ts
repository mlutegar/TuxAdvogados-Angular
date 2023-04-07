import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { BrowserModule } from '@angular/platform-browser';
import { ClienteModule } from '../cliente/cliente.module';



@NgModule({
  declarations: [SobreComponent],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class SobreModule { }
