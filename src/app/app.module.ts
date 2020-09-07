import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoService } from './services/empleado.service';
import { ServiceInterceptor } from './services/service.interceptor';
import { EmpleadoMainComponent } from './components/empleado-main/empleado-main.component';
import { EmpleadoFormComponent } from './components/empleado-main/empleado-form/empleado-form.component';
import { EmpleadoListComponent } from './components/empleado-main/empleado-list/empleado-list.component';
import { EmpleadoCardComponent } from './components/empleado-card/empleado-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadoMainComponent,
    EmpleadoListComponent,
    EmpleadoFormComponent,
    EmpleadoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    EmpleadoService,{
    provide: HTTP_INTERCEPTORS,
    useClass: ServiceInterceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
