import { Component, OnInit } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash, faPlus} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import { Empleado } from '../../../models/empleado';
import { EmpleadoService } from '../../../services/empleado.service';


@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  
  empleados:Empleado[];
  faListAlt=faListAlt;
  faEye= faEye;
  faPencilAlt= faPencilAlt;
  faTrash= faTrash;
  faPlus=faPlus;
 
  constructor( private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void{
    this.empleadoService.list().subscribe(result =>{
      this.empleados= result;
    });
  }

  delete(e:Empleado): void {
    Swal.fire({
      title: 'Esta seguro que desea continuar?',
      text: "El registro de "+e.nombre_completo+" será elimado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.empleadoService.delete(e).subscribe( result => {
          console.log(result);
          this.list();
        }
          
        )
      }
    })
  }

}
