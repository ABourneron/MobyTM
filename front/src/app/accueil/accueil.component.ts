import { Component, OnInit } from '@angular/core';
import { ApiService, mobs } from '../api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})

export class AccueilComponent implements OnInit {

  mobylettes: mobs[] = [];

  constructor(
    private api: ApiService ){ }

  ngOnInit(): void {
    this.getMobs();
  }
  

  getMobs(): void {
    this.api.getMobs().subscribe((resp: any) => {
      this.mobylettes = resp;
    });
  }

}