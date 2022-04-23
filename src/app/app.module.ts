import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ContainerComponent } from './componentes/container/container.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component'
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ContainerComponent,
    FooterComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
