import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  

  constructor( private router:Router) { }
  volverVista(){
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
