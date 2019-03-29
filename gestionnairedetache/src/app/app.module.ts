import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{MatCardModule, MatFormFieldModule,
  MatInputModule, MatSnackBarModule, MatNativeDateModule, MAT_DATE_LOCALE, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule, } from '@angular/material/datepicker';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { BarreMenuComponent } from './barre-menu/barre-menu.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription.users/inscription/inscription.component';
import { ModificationComponent } from './modification.compte/modification/modification.component';
import { HomeComponent } from './home/home/home.component';
import { AuthInterceptor } from './auth.interceptor';
import { DetailTacheComponent } from './gestion.taches/detail-tache/detail-tache.component';
import {MatTableModule} from '@angular/material/table';
import { AjouteTacheComponent } from './gestion.taches/ajoute-tache/ajoute-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BarreMenuComponent,
    LoginComponent,
    InscriptionComponent,
    ModificationComponent,
    HomeComponent,
    DetailTacheComponent,
    AjouteTacheComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    
    
    
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
