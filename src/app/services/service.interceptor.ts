import swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import 'rxjs/add/operator/do'
import Swal from 'sweetalert2';


@Injectable()
export class ServiceInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, response: HttpHandler): Observable<HttpEvent<unknown>> {
    return response.handle(request).do(next =>{
      if(next instanceof HttpResponse){
        console.log(next);
        if(next.status == 201){
          
          Swal.fire({
            title:"!Correcto¡",
            text:next.statusText,
            icon: "success"
          });
        }
      }
    }, error => {
      console.error(error);
      if(error.status == 400){
          
        Swal.fire({
          title:"Error",
          text:error.error.Message,
          icon: "error"
        });
      }
    } );
  }
}
