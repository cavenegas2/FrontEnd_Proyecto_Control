import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoMainComponent } from './components/empleado-main/empleado-main.component';
import { EmpleadoCardComponent } from './components/empleado-card/empleado-card.component';
import { EmpleadoListComponent } from './components/empleado-main/empleado-list/empleado-list.component';
import { EmpleadoFormComponent } from './components/empleado-main/empleado-form/empleado-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'empleados', component:EmpleadoMainComponent},
  {path: 'empleados/form', component:EmpleadoFormComponent}, //create
  {path: 'empleados/form/:id', component:EmpleadoFormComponent}, //update
  {path: 'empleados/list', component:EmpleadoListComponent}, //list
  {path: 'empleados/card/:id', component:EmpleadoCardComponent} //retrieve
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
