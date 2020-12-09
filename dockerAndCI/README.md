# Mise en place de Docker et une CI

Prérequis : installer docker sur le poste ou le serveur

## Sur le poste LOCAL

I - Il faut d'abord créer le fichier nginx.conf (voir sources pour le contenu, proche de la configuration par défaut ici) pour la config du serveur nginx.

II - Il faut ensuite créer le fichier Dockerfile à la racine du projet.

Note sur la composition du Dockerfile : On retrouve dans celui-ci diverses commandes permettant la création de l'image.

FROM : commence le fichier, pour indiquer l'image de base à partir de laquelle on va "builder" notre image,
COPY : pour copier le contenu en local vers le répertoire dans l'image,
RUN : pour lancer une commande lors de la construction (ici suppression du contenu de la page par défaut du serveur nginx, on aurait aussi pu installer des modules complémentaires ...),
CMD : termine le fichier, donne la commande à lancer par défaut lors du démarrage de l'image.

III - Ajouter aussi le user local dans le groupe docker.

Pour construire l'image, exécuter les commandes suivantes :

```bash
#Dans le repertoire Angular (le projet doit être "buildé")
ng build

#Commandes dockers en local

#Construction de l'image : -t pour la nommer (ici registry.gitlab.com/abourneron/mobytm) et "." pour indiquer qu'on va travailler dans le répertoire courant (là où est le Dockerfile)
docker build -t registry.gitlab.com/abourneron/mobytm .

#Démarrer l'image en local : --detach pour rendre autonome le processus ("détache" le processus de la console), --publish pour lier le port d'écoute de l'hôte au port de sortie de l'image
docker run --detach --publish=8001:80 --name=MobyWeb mobyweb:latest

```

Quelques commandes utilitaires complémentaires :
```bash

#Lister les images en local
docker images

#Lister les conteneurs actifs (running)
docker ps -a

#Purger le système d'images inactives
docker system prune

```

NOTE : deux solutions pour diffuser notre image docker : utiliser le registry officiel Docker hub, ou utiliser le registry sous GitLab. On choisit le deuxième dans cet exemple.

Upload du docker sur GitLab :
```bash
docker login registry.gitlab.com
docker push registry.gitlab.com/abourneron/mobytm

#NOTE : docker pull [nom de l'image] pour récupérer une image depuis un registry
```

Le conteneur docker est maintenant en ligne.

## Sur le serveur DISTANT
Ajouter aussi le user local dans le groupe docker.

```bash
docker login registry.gitlab.com
docker run -d -p=80:80 --name=MobyWeb registry.gitlab.com/abourneron/mobytm:latest

docker ps -a
#Pour voir les logs
docker logs [ID]

#Pour se connecter en shell dans le docker, -ti pour avoir le shell opérationnel, [ID] = id retourné lors du run
docker exec -ti [ID] /bin/bash
```


### Pour mettre à jour l'image
```bash
#Arrêter une image : 
sudo docker stop [ID]

#Supprimer une image :
sudo docker rm [nom]

#NOTE : sudo docker rm [ID] fonctionne aussi

#On relance l'image (mise à jour automatiquement par docker depuis le registry GitLab)
sudo docker run -d -p=80:80 --name=MobyWeb registry.gitlab.com/abourneron/mobytm:latest
```
