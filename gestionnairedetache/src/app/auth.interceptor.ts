import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {tap} from 'rxjs/operators'

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

    constructor(private authService :AuthService, private router:Router){}

    intercept(req:HttpRequest<any>,next:HttpHandler){
        const token=this.authService.token || "";
        const request = req.clone({
            headers : req.headers.set("Authorization",'Bearer '+token)
        })
        return next.handle(request).pipe(
            tap( succes =>{},
                errorEvent=>{
                    if (errorEvent instanceof HttpErrorResponse){
                        if (errorEvent.status === 401){
                            this.router.navigate (['/login'])
                        }
                    }
                }
            )
        )
    }

}