import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor( formBuilder:FormBuilder, 
    private authService: AuthService,
    private router:Router,
    private snackBar: MatSnackBar) {
    this.form= formBuilder.group({
      email:["",Validators.email],
      password:""
    })
   }

  ngOnInit() {

  }

   public login(){
     if (this.form.valid){
       this.authService.login(this.form.value).subscribe(
         loginSucces =>{
           this.router.navigate(['home'])
         }, loginError=>{
           this.snackBar.open('Authentification échouée','OK',{duration:5000})
         }
       )

     }
   }
}

