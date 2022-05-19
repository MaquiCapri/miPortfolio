import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
 miPortfolio:any;

  
  constructor(private datosPorfolio: PorfolioService,private router:Router) { }

  irLogin(){
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPortfolio=data;
    });
  }

}
