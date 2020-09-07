import { Component, OnInit } from '@angular/core';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empleado-main',
  templateUrl: './empleado-main.component.html',
  styleUrls: ['./empleado-main.component.css']
})
export class EmpleadoMainComponent implements OnInit {

  
  constructor(private authService: AuthService, private router: Router) { }


  faUserPlus = faUserPlus;
  ngOnInit(): void {
  }

  login(usuario:string, contrasena:string){
    this.authService.login(usuario,contrasena).subscribe(result=> {
      console.log(result);
      Swal.fire({
        title : "Bienvenid@",
        text : "Ingreso satisfactorio de " + usuario,
        icon : 'success'
      });
      this.router.navigate(['/empleados/list']); 
    });
  }

}
