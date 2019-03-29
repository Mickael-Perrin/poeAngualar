import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barre-menu',
  templateUrl: './barre-menu.component.html',
  styleUrls: ['./barre-menu.component.css']
})
export class BarreMenuComponent implements OnInit {
  public connexionUser:boolean;

  constructor(private authService:AuthService, private route : Router) {
   }

  ngOnInit() {
  }

public connexionUser1():boolean{
  if (this.authService.userCourant){
    return this.connexionUser = true;
  }
  else {
    return this.connexionUser= false;
  }

}

public deconnexion(){
  this.authService.deconnexionUser();
  this.route.navigate(['Acceuil']);

}
}
