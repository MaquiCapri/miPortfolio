import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { subscribeOn } from 'rxjs';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  isLogged = false;

  persona: persona = new persona("", "", "");

  miPortfolio: any;


  constructor(private datosPorfolio: PorfolioService, private router: Router, public personaService: PersonaService, private tokenService: TokenService) { }

  // irMail() {
    // this.router.navigate(['mail']);
  // }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => { this.persona = data })

    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  irLogin() {
    this.router.navigate(['login']);
  }

  onlogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  irInicio() {
    this.router.navigate(['']);
  }

}
