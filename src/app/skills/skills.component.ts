import { Component, OnInit } from '@angular/core';
import { Skills } from '../model/skills';

import { SSkillsService } from '../service/s-skills.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

  export class SkillsComponent implements OnInit {
    skill: Skills[] = [];
  
    constructor(private sSkills: SSkillsService, private tokenService: TokenService) { }
  
 isLogged = false;

    ngOnInit(): void {
      this.cargarSkills();
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
      //si estamos logeados o no
    }
  
    cargarSkills(): void {
      this.sSkills.lista().subscribe(data => { this.skill = data; })
    }
  
    delete(id?: number) {
      if (id != undefined) {
        this.sSkills.delete(id).subscribe(
          data => {
            this.cargarSkills();
          }, err => {
            alert("No se pudo borrar el skill");
          }
        )
  
      }
    }
  

}
