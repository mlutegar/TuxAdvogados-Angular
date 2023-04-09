// Modulo para compartilhamento

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    exports: [
        CommonModule, // ngIf e ngFor
        BrowserModule, // Módulo fundamentao para o código
        ReactiveFormsModule,
        AppRoutingModule
    ]

})

export class SharedModule{}