import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { VistaComponent } from './componentes/vista/vista.component';
import { InputLoginComponent } from './componentes/input-login/input-login.component';
import { InputGithubComponent } from './componentes/input-github/input-github.component';
import { InputMailComponent } from './componentes/input-mail/input-mail.component';
import { InputlinkedinComponent } from './componentes/inputlinkedin/inputlinkedin.component';

const Routes:Routes=[
  {path:'', component: VistaComponent},
  {path: 'curriculum',component: CurriculumComponent},
  {path: 'login',component: InputLoginComponent},
  {path: 'github',component: InputGithubComponent},
  {path: 'mail',component: InputMailComponent},
  {path: 'linkedin',component: InputlinkedinComponent},
]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes),
  ]
})
export class AppRoutingModule { }
