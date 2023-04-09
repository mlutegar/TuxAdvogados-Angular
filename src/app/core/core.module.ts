import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  exports: [
    AngularFireAuthModule,
    AngularFireModule
  ]
})
export class CoreModule { }
