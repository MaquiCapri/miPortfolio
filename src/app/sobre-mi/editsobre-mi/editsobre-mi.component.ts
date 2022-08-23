import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SobreMi } from 'src/app/model/sobre-mi';
import { SSobreMiService } from 'src/app/service/s-sobre-mi.service';

@Component({
  selector: 'app-editsobre-mi',
  templateUrl: './editsobre-mi.component.html',
  styleUrls: ['./editsobre-mi.component.css']
})
export class EditsobreMiComponent implements OnInit {
  sobreM: SobreMi = null;

  constructor(private sSobreMi: SSobreMiService,
     private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
     this.sSobreMi.detail(id).subscribe(data =>{
      this.sobreM = data;
     }, err =>{
      alert("Error al modificar sobre mi");
      this.router.navigate(['']);
     }
     )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSobreMi.update(id, this.sobreM).subscribe(data => {
      this.router.navigate(['curriculum']);
    }, err => {
      alert("Error al modificar texto");
      this.router.navigate(['']);
    }
    )

  }
  

}
