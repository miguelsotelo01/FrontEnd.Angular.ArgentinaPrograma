import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PersonaService } from './services/persona.service';
import { InformacionComponent } from './components/informacion/informacion.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HardSoftComponent } from './components/hard-soft/hard-soft.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformacionComponent,
    AcercaDeComponent,
    FooterComponent,
    ProyectosComponent,
    HardSoftComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
