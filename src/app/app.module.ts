import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ContainerComponent } from './componentes/container/container.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { VistaComponent } from './componentes/vista/vista.component';
import { InputLoginComponent } from './componentes/input-login/input-login.component';
import { InputMailComponent } from './componentes/input-mail/input-mail.component';
import { InputGithubComponent } from './componentes/input-github/input-github.component';
import { InputlinkedinComponent } from './componentes/inputlinkedin/inputlinkedin.component';





@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ContainerComponent,
    FooterComponent,
    CurriculumComponent,
    VistaComponent,
    InputLoginComponent,
    InputMailComponent,
    InputGithubComponent,
    InputlinkedinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
   
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

