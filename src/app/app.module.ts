import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { OEducComponent } from './componentes/oeduc/oeduc.component';
import { EstudiantesComponent } from './componentes/estudiantes/estudiantes.component';
import { DocenteComponent } from './componentes/docente/docente.component';
import { VinculacionComponent } from './componentes/vinculacion/vinculacion.component';
import { TramitesComponent } from './componentes/tramites/tramites.component';
import { ContraloriaComponent } from './componentes/contraloria/contraloria.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SaiiutComponent } from './componentes/saiiut/saiiut.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercaComponent,
    OEducComponent,
    EstudiantesComponent,
    DocenteComponent,
    VinculacionComponent,
    TramitesComponent,
    ContraloriaComponent,
    InicioComponent,
    SaiiutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
