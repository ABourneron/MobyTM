# MobyWebTM

MobyWeb est un projet d'application web de location de mobylettes.

## Fonctionnement

Le projet repose sur trois applications dockerisées :
- front en Angular
- API REST avec NodeJS
- MongoDB pour la BDD

Les trois conteneurs sont lancés via docker-compose.

## Partie front
Les sources sont situées dans le dossier front.

```sh
cd front
npm install
ng start
```

## Partie api
Les sources de l'application Node sont situés dans le dossier API.

```sh
cd api
npm install
node app.js
```
