import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Taches } from '../models/taches';


@Injectable({
  providedIn: 'root'
})
export class TachesService {

  idTache:number;


  constructor(private http: HttpClient, private route:Router) {
    
   }

  public getTachesByUser(idUser: number){
    return this.http.get("http://localhost:3000/taches?usersId="+idUser)
  }

  public ajouterTache(newTache : {titre:string, usersId:number,
    descrciption: string, date_de_création:string , 
   date_fin:string, type:string }): Observable<boolean>  {
     return new Observable ((observer)=>{
       this.http.post("http://localhost:3000/taches" , newTache).subscribe(
       (res) =>{
         observer.next(true);
         observer.complete();
       })
     });
   }
   public supprimerTache(idtache:number): Observable<boolean>{
    return new Observable ((observer)=>{
      this.http.delete("http://localhost:3000/taches/"+idtache).subscribe(
      (res) =>{
        observer.next(true);
        observer.complete();
      })
    });
  }
   
public setIdTache(idTache:number){
  this.idTache=idTache;
  this.route.navigate(["detailTache"]);

}
public getTacheByIdTache(idTache:number){
  return this.http.get("http://localhost:3000/taches/"+idTache);
}

}
