import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userCourant : Users;
  private _token:string

  constructor(private http: HttpClient,private route:Router) { }

  public login(formLogin: { email: string, password: string }): Observable<boolean> {
    return new Observable(observer => {
      this.http.post("http://localhost:3000/login", formLogin)
        .subscribe((result: { accessToken: string }) => {
          this._token=result.accessToken;
          this.http.get("http://localhost:3000/users?email="+formLogin.email).subscribe(
            (res :Users[])=>{
              this.userCourant=res[0];
              observer.next(true);
              observer.complete();
            }
          )
        },
          err => observer.error(err)
      )
    })
  }

  get token(){
    return this._token;
  }

  public modificationUser(userModifier: { name:string,
    prenom:string, email:string}){
      this.http.patch("http://localhost:3000/users/"+this.userCourant.id, userModifier)
      .subscribe((rep)=>{
        this.userCourant.name= userModifier.name;
        this.userCourant.prenom= userModifier.prenom;
        this.userCourant.email= userModifier.email;
        console.log(this.userCourant);
        
      })
    }
  
  public deconnexionUser(){
    this._token=undefined;
    this.userCourant=undefined
  }
}
