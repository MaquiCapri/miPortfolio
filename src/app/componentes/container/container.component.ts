import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
 container: any;

  constructor(private datosPorfolio: PorfolioService, private router:Router) { }
  
  irCurriculum(){
    this.router.navigate(['curriculum']);
  }

  irProyects(){
    this.router.navigate(['proyects']);
  }


  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.container=data;
    });

   
  }


}
