import { Component, OnInit } from '@angular/core';
import { TachesService } from '../taches.service';
import { Taches } from 'src/app/models/taches';

@Component({
  selector: 'app-detail-tache',
  templateUrl: './detail-tache.component.html',
  styleUrls: ['./detail-tache.component.css']
})
export class DetailTacheComponent implements OnInit {
  idTache:number
  tacheCourante:Taches

  constructor(private tachService: TachesService) {
    this.idTache=this.tachService.idTache;
   }

  ngOnInit() {
    this.tachService.getTacheByIdTache(this.idTache)
    .subscribe((tache :Taches) =>{
      this.tacheCourante=tache;
    })
  }

}
