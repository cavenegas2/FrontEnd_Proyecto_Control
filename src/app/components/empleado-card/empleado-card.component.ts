import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { ActivatedRoute } from '@angular/router';
import { faUserTie, faBriefcase, faEnvelope, faRing, faRestroom, faPhoneSquare, faMapPin, faIdCard, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-empleado-card',
  templateUrl: './empleado-card.component.html',
  styleUrls: ['./empleado-card.component.css']
})
export class EmpleadoCardComponent implements OnInit {
  
  empleado: Empleado;
  faUserTie= faUserTie;
  faBriefcase= faBriefcase;
  faEnvelope= faEnvelope;
  faRing= faRing;
  faRestroom=faRestroom;
  faPhoneSquare=faPhoneSquare;
  faMapPin=faMapPin;
  faIdCard= faIdCard;
  faArrowAltCircleLeft= faArrowAltCircleLeft;



  constructor(private empleadoService:EmpleadoService,
              private activatedRoute: ActivatedRoute          
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.empleadoService.retrieve(params['id']).subscribe(
            result => this.empleado = result
          )
        }
      }
    )
  }

}
