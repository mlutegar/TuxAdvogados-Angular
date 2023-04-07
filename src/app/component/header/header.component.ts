import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from 'src/app/servico/autenticar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = "TuxAdvogados";

  constructor(
    private autenticar: AutenticarService,
    private router: Router
  ) {}

  deslogar(){
    this.autenticar.logout();
    this.router.navigate(['']);
  }

}
