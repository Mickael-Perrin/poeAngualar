import { Component, OnInit } from '@angular/core';
import { TachesService } from '../taches.service';
import { AuthService } from 'src/app/auth.service';
import { Users } from 'src/app/models/users';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment'
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoute-tache',
  templateUrl: './ajoute-tache.component.html',
  styleUrls: ['./ajoute-tache.component.css']
})
export class AjouteTacheComponent implements OnInit {

  userCourant : Users;
  form : FormGroup;
  dateEntree : string;

  constructor(private tachService:TachesService,
    private authService : AuthService,
    private fb :FormBuilder,
    private snackBar: MatSnackBar,
    private route: Router ) { 
      this.form =this.fb.group({
        titre:"",
        description:"",
        date_fin:"",
        type:""
      }) 
    }

  ngOnInit() {
    this.userCourant=this.authService.userCourant;
  }

  toto(newDate) {
     this.dateEntree=moment(newDate.value).format('DD/MM/YYYY');
  }

  ajouter(){
    if(this.form.valid){
      let dateDuJour=moment().format('DD/MM/YYYY');
      console.log(dateDuJour);
      let id= this.userCourant.id;
      console.log(id)
      const newForm = Object.assign({},this.form.value,
        {date_de_creation:dateDuJour},{usersId:id});
      newForm.date_fin = this.dateEntree;
      console.log(newForm);
      this.tachService.ajouterTache(newForm).subscribe(
        (res)=>{
          this.route.navigate(['home']);
        }
      )
    }
    else{
      this.snackBar.open('Vous avez pas rempli tous les champs','OK',{duration:5000})
    }
   
  }

}
