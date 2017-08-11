#!/bin/sh

docker login -u $DOCKER_USER -p $DOCKER_PASS
if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="$TRAVIS_BRANCH"
fi

REPO_NAME="dipernaa/pokedex-react"
docker build -f Dockerfile -t $REPO_NAME:$TAG .
docker push $REPO_NAME
