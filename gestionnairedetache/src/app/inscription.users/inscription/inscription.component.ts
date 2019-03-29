import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InscriptionService } from '../inscription.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  passwordInvalide : boolean;
  form :FormGroup;

  constructor(private inscService : InscriptionService, 
    fb:FormBuilder,
    private route: Router,) { 
      this.form= fb.group({
        name:"",
        prenom:"",
        email:["",Validators.email],
        password:"",
        passwordControl:""
      })

  }

  ngOnInit() {
  }
  
  public inscription(){
    if (this.form.valid){
      if (this.form.get("password").value!==this.form.get("passwordControl").value){
        alert('Les mots de passes ne sont pas identiques') 
      }
      else{
        const formulaireCloner = Object.assign({},this.form.value);
        delete formulaireCloner.passwordControl;
        this.inscService.enregistrement(formulaireCloner).subscribe(
          loginSucces =>{
          this.route.navigate(['login'])
          }, loginError=>{
          alert("Inscription échouée! Veuillez recommencer!")
          }
        )


      }
    }
     else{
      alert("Le formulaire n'est pas valide!")
    } 
  }

}
