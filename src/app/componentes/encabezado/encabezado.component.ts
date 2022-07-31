import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: persona = new persona("","","");
 
   miPortfolio:any;

  
  constructor(private datosPorfolio: PorfolioService,private router:Router, public personaService: PersonaService) { }
  irLogin(){
    this.router.navigate(['login']);
  }
  

   ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona = data})
    
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
       console.log(data);
       this.miPortfolio=data;
      });
  }

}
