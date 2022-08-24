import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { VistaComponent } from './componentes/vista/vista.component';
import { InputMailComponent } from './componentes/input-mail/input-mail.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia/edit-experiencia.component';
import { EditskillsComponent } from './skills/editskills.component';


const Routes: Routes = [
  { path: '', component: VistaComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mail', component: InputMailComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  {path: 'editskills', component: EditskillsComponent}
  

]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes),
  ]
})
export class AppRoutingModule { }
