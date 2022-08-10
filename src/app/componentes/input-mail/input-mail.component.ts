import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-mail',
  templateUrl: './input-mail.component.html',
  styleUrls: ['./input-mail.component.css']
})
export class InputMailComponent implements OnInit {

  constructor(private router:Router) { }
  volverPrincipal(){
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
