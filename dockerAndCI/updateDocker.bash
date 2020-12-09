#!/usr/bin
ng build
docker build -t registry.gitlab.com/abourneron/mobytm --label "MobyWeb" .
docker push registry.gitlab.com/abourneron/mobytm

ssh ubuntu@51.38.185.67 << EOF
sleep 1
docker stop MobyWeb
docker rm MobyWeb
docker rmi $(docker images -q)
sleep 1
docker run -d -p=80:80 --name=MobyWeb registry.gitlab.com/abourneron/mobytm:latest
exit
EOF