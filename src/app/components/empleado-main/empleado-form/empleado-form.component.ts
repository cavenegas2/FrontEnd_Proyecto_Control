import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from '../../../services/empleado.service';
import { faPhoneSquare,faMapPin,faUserPlus, faIdCard, faSave, faTimes, faUserTie,faEnvelope,faRing,faBriefcase,faRestroom} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {
  
  faUserPlus = faUserPlus;
  faIdCard = faIdCard;
  faSave= faSave;
  faTimes= faTimes;
  faUserTie= faUserTie;
  faEnvelope=faEnvelope;
  faRing= faRing;
  faBriefcase= faBriefcase;
  faMapPin= faMapPin;
  faRestroom= faRestroom;
  faPhoneSquare= faPhoneSquare;

  title = "Nuevo registro de empleado";

  empleado : Empleado = new Empleado();
  
  form: FormGroup;  
  
  constructor(private empleadoService: EmpleadoService, 
    private formBuilder: FormBuilder, 
    private activatedRoute : ActivatedRoute, 
    private router: Router) { }

    ngOnInit(): void {
      this.form = this.formBuilder.group({
      nombre_completo:['', [Validators.required]],
      area_trabajo:[''],
      cedula:[''],
      correo:[''],
      estado_civil:[''],
      sexo:[''],
      telefono:[''],
      lugar_nacimiento:[''],      
      });  
  
      this.activatedRoute.params.subscribe(
        params => {
          if(params['id']){
            this.empleadoService.retrieve(params['id']).subscribe(
                result =>
                { 
                  this.empleado = result;
                  this.title = "Actualizando el registro de " + this.empleado.nombre_completo;
                }
            )
          }
        }
      );
    
    }


  onSubmit() : void {
    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    console.log(this.empleado);

    this.empleadoService.save(this.empleado).subscribe(
      result => {
        console.log(result);   
        this.router.navigate(['empleados/list']);

      }
    );
  }

  onReset() : void {   
    this.form.reset();    
  }

}


