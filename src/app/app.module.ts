import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ContainerComponent } from './componentes/container/container.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { VistaComponent } from './componentes/vista/vista.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CircleProgressComponent } from './componentes/circle-progress/circle-progress.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia/edit-experiencia.component';
import { ProyectsComponent } from './componentes/container/proyects/proyects.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ContainerComponent,
    FooterComponent,
    CurriculumComponent,
    VistaComponent,
    CircleProgressComponent,
    LoginComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    ProyectsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

