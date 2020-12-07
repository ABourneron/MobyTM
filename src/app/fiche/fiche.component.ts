import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  mobName: string = "Peugeot BB";
  mobStatus: string = "Indisponible";
  mobDesc: string = "La plus belle des mobs.";
  mobPrice: string = "10€/j";

  constructor() { }

  ngOnInit(): void {
  }

  
}

