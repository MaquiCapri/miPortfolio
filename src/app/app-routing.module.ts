import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { VistaComponent } from './componentes/vista/vista.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia/edit-experiencia.component';
import { ProyectsComponent } from './componentes/container/proyects/proyects.component';



const Routes: Routes = [
  { path: '', component: VistaComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'proyects', component: ProyectsComponent },
  ]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes),
  ]
})
export class AppRoutingModule { }
