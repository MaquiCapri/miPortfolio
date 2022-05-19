import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  irMail(){
    this.router.navigate(['mail']);
  }

  irGithub(){
    this.router.navigate(['github']);
  }

  irLinkedin(){
    this.router.navigate(['linkedin']);
  }
  ngOnInit(): void {
  }

}
