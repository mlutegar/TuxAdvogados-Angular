// Modulo para compartilhamento

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

@NgModule({
    exports: [
        CommonModule, // ngIf e ngFor
        BrowserModule, // Módulo fundamentao para o código
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFireAuthModule,
        AngularFirestoreModule
    ]

})

export class SharedModule{}