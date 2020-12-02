import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  mobs = [
    {
      name: 'Peugeot BB',
      status: 'Indisponible',
      desc : 'La plus belle des mobs.'
    },
    {
      name: 'AV88',
      status: 'Disponible',
      desc : 'Pas mal aussi, surtout avec le vernis.'
    },
    {
      name: 'Solex',
      status: 'Disponible',
      desc : "Le classique, avec une belle odeur d'essence pour aller chercher le pain."
    },
    {
      name: 'Peugeot BB',
      status: 'Indisponible',
      desc : 'La plus belle des mobs.'
    },
    {
      name: 'AV88',
      status: 'Disponible',
      desc : 'Pas mal aussi, surtout avec le vernis.'
    },
    {
      name: 'Solex',
      status: 'Disponible',
      desc : "Le classique, avec une belle odeur d'essence pour aller chercher le pain."
    },
    {
      name: 'Peugeot BB',
      status: 'Indisponible',
      desc : 'La plus belle des mobs.'
    },
    {
      name: 'AV88',
      status: 'Disponible',
      desc : 'Pas mal aussi, surtout avec le vernis.'
    },
    {
      name: 'Solex',
      status: 'Disponible',
      desc : "Le classique, avec une belle odeur d'essence pour aller chercher le pain."
    },
    {
      name: 'Peugeot BB',
      status: 'Indisponible',
      desc : 'La plus belle des mobs.'
    },
    {
      name: 'AV88',
      status: 'Disponible',
      desc : 'Pas mal aussi, surtout avec le vernis.'
    },
    {
      name: 'Solex',
      status: 'Disponible',
      desc : "Le classique, avec une belle odeur d'essence pour aller chercher le pain."
    }
  ];

  constructor() {
  }

}