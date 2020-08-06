import { Component, OnInit } from '@angular/core';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-empleado-main',
  templateUrl: './empleado-main.component.html',
  styleUrls: ['./empleado-main.component.css']
})
export class EmpleadoMainComponent implements OnInit {

  
  constructor() { }


  faUserPlus = faUserPlus;
  ngOnInit(): void {
  }

}
