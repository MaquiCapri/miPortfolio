import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { VistaComponent } from './componentes/vista/vista.component';

import { InputGithubComponent } from './componentes/input-github/input-github.component';
import { InputMailComponent } from './componentes/input-mail/input-mail.component';
import { InputlinkedinComponent } from './componentes/inputlinkedin/inputlinkedin.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia/edit-experiencia.component';

const Routes:Routes=[
  {path:'', component: VistaComponent},
  {path: 'curriculum',component: CurriculumComponent},
  {path: 'login',component: LoginComponent},
  {path: 'github',component: InputGithubComponent},
  {path: 'mail',component: InputMailComponent},
  {path: 'linkedin',component: InputlinkedinComponent},
  {path: 'nuevaexp',component: NewExperienciaComponent},
  {path: 'editexp/:id',component: EditExperienciaComponent},


]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes),
  ]
})
export class AppRoutingModule { }
