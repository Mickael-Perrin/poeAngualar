import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http : HttpClient) { }

  public enregistrement(user:{name:string ,prenom :string, email:string, password:string }):Observable <boolean>{
    return new Observable (observer =>{
      this.http.post("http://localhost:3000/register",user).subscribe(
        (res)=>{
          observer.next(true);
          observer.complete;        
        },
        err=> observer.error(err)
      );
    });
  }
}
