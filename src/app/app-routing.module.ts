import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ContraloriaComponent } from './componentes/contraloria/contraloria.component';
import { DocenteComponent } from './componentes/docente/docente.component';
import { EstudiantesComponent } from './componentes/estudiantes/estudiantes.component';
import { InicioComponent } from './componentes/inicio/inicio.component'; import { NavbarComponent } from './componentes/navbar/navbar.component';
import { OEducComponent } from './componentes/oeduc/oeduc.component';
import { TramitesComponent } from './componentes/tramites/tramites.component';
import { VinculacionComponent } from './componentes/vinculacion/vinculacion.component';
import { SaiiutComponent } from './componentes/saiiut/saiiut.component';



const routes: Routes = [

  { path: 'inicio', component: InicioComponent },
  { path: 'acerca-utvt', component: AcercaComponent },
  { path: 'contraloria-social', component: ContraloriaComponent },
  { path: 'docente', component: DocenteComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'Oferta-Educativa', component: OEducComponent },
  { path: 'tramites-servicios', component: TramitesComponent },
  { path: 'vinculacion', component: VinculacionComponent },
  { path: 'Saiiut', component: SaiiutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
