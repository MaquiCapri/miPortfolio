import { Component, OnInit } from '@angular/core';
import { SobreMi } from '../model/sobre-mi';
import { SSobreMiService } from '../service/s-sobre-mi.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  sobre: SobreMi[] = [];
  SobreMi: any;
  constructor(private sSobreMi: SSobreMiService, 
    private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSobreMi();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    //si estamos logeados o no
  }

  cargarSobreMi(): void {
    this.sSobreMi.lista().subscribe(data => { this.sobre = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sSobreMi.delete(id).subscribe(
        data => {
          this.cargarSobreMi();
        }, err => {
          alert("No se pudo borrar el texto");
        }
      )

    }
  }
  

}
