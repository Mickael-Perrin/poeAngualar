import { Component, OnInit, Input } from '@angular/core';
import { TachesService } from 'src/app/gestion.taches/taches.service';
import { Taches } from 'src/app/models/taches';
import { AuthService } from 'src/app/auth.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
   listTaches  : Taches[];
   userCourant : Users;
   displayedColumns: string[] = ['titre', 'date_fin', 'type','Detail','Supprimer'];
   dataSource ;
  

  constructor(
    private tacheservice :TachesService,
    private authservice : AuthService,
    private route : Router) {
    this.userCourant= this.authservice.userCourant;
   }

  ngOnInit() {
    this.tacheservice.getTachesByUser(this.userCourant.id).subscribe(
      (res :Taches [])=>{
        this.listTaches = res;
        this.dataSource=new MatTableDataSource(res);
      }
    )
  }

  envoi(idTache:number){
      this.tacheservice.supprimerTache(idTache).subscribe(
      (res)=>{
        this.tacheservice.getTachesByUser(this.userCourant.id).subscribe(
          (res :Taches [])=>{
            this.listTaches = res; 
          })
      });
  }

  detail(idTaches:number){
    this.tacheservice.setIdTache(idTaches);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



 



}
