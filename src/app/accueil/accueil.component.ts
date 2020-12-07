import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  mobs = [
    {
      name: 'Peugeot BB',
      status: 'Indisponible',
      desc: 'La plus belle des mobs.',
      price: '10€/j'
    },
    {
      name: 'AV88',
      status: 'Disponible',
      desc: 'Pas mal aussi, surtout avec le vernis.',
      price: '10€/j'
    },
    {
      name: 'Peugeot 103',
      status: 'Disponible',
      desc: 'Le grand classique.',
      price: '10€/j'
    },
    {
      name: 'Solex',
      status: 'Disponible',
      desc: "Le classique, avec une belle odeur d'essence pour aller chercher le pain.",
      price: '10€/j'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
