import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from '../model/skills';
import { SSkillsService } from '../service/s-skills.service';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
  skillPor: Skills = null;

  constructor(private sSkills: SSkillsService,
     private activatedRouter: ActivatedRoute, private router: Router) { }
  

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkills.detail(id).subscribe(data =>{
     this.skillPor = data;
    }, err =>{
     alert("Error al modificar skills");
     this.router.navigate(['']);
    }
    )
 }

 onUpdate(): void {
   const id = this.activatedRouter.snapshot.params['id'];
   this.sSkills.update(id, this.skillPor).subscribe(data => {
     this.router.navigate(['editskills']);
   }, err => {
     alert("Error al modificar skills");
     this.router.navigate(['']);
   }
   )

 }
  }


