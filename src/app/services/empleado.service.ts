import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import {retry,} from 'rxjs/operators';
import { Empleado } from '../models/empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
 
  
  url : string ="http://cavenegas2-001-site1.itempurl.com/api/Empleado";
  //url : string = "https://localhost:44367/api/Empleado";
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor( private http:HttpClient ) { }

  save(e:Empleado) : Observable<any>{
    let empleadoBody = JSON.stringify(e);
    if(e.id_emp === undefined){
      return this.http.post<any>(this.url,empleadoBody, this.httpOptions);
    }
    return this.http.put<any>(this.url,empleadoBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Empleado> {
    return this.http.get<Empleado>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  delete(e: Empleado): Observable<any>{
    return this.http.delete<any>(this.url +'/'+e.id_emp, 
      this.httpOptions);
  }

  list(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.url, this.httpOptions).pipe(
      retry(1),
    );
  }
 

}
