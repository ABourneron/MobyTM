# Mise en place de Docker et une CI

## Sur le poste LOCAL

Il faut d'abord créer le fichier nginx.conf pour la config du serveur nginx. Il faut ensuite créer le fichier Dockerfile à la racine du projet. Ajouter aussi le user local dans le groupe docker.

Exécuter les commandes suivantes :

```bash
#Dans le repertoire Angular
ng build

#Commandes dockers local
docker build -t registry.gitlab.com/abourneron/mobytm .
docker images
docker run --detach --publish=8001:80 --name=MobyWeb mobyweb:latest #lance le docker en local
docker ps -a
```

Upoload du docker sur GitLab :
```bash
docker login registry.gitlab.com
docker push registry.gitlab.com/abourneron/mobytm
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
#Pour se connecter en shell dans le docker
docker exec -it [ID] /bin/bash
```


### Pour mettre à jour l'image
```bash
sudo docker stop
sudo docker rm [nom]
sudo docker run -d -p=80:80 --name=MobyWeb registry.gitlab.com/abourneron/mobytm:latest
```