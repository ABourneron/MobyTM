#!/usr/bin
cd ../front
ng build
docker build -t registry.gitlab.com/abourneron/mobytm/front --label "MobyWebFront" .
docker push registry.gitlab.com/abourneron/mobytm/front

cd ../api
docker build -t registry.gitlab.com/abourneron/mobytm/back/api --label "MobyWebAPI" .
docker push registry.gitlab.com/abourneron/mobytm/back/api

scp ../docker-compose.yml ubuntu@51.38.185.67:/home/ubuntu

ssh ubuntu@51.38.185.67 << EOF
sleep 1
docker-compose down
docker image prune -a -f
sleep 1
docker-compose up -d
exit
EOF