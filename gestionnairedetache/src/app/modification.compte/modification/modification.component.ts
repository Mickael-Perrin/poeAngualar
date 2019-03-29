import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  userCourant : Users;
  affichageFormulaire:boolean
  form :FormGroup;

  constructor(private authserv:AuthService,
    private fb:FormBuilder,
    private route:Router) {
    this.userCourant=authserv.userCourant;
    this.affichageFormulaire=false;
    this.form=this.fb.group({
      name:"",
      prenom:"",
      email:""
    })
   }

  ngOnInit() {
  }

  public formModifier(){
    this.affichageFormulaire=true;
  }

  envoiModification(){

    let formulaireCloner =  Object.assign({}, this.form.value)
    if (!formulaireCloner.name && !formulaireCloner.prenom
      && !formulaireCloner.email){}
    else{
      if(!formulaireCloner.name){
        formulaireCloner.name= this.userCourant.name;
      }
      if (!formulaireCloner.prenom){
        formulaireCloner.prenom= this.userCourant.prenom;
      }
      if (!formulaireCloner.email){
        formulaireCloner.email = this.userCourant.email
      }

      this.authserv.modificationUser(formulaireCloner);
      this.route.navigate(['Acceuil']);
      
      
      


    
    }
  }

}
