#!/bin/sh

if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="$TRAVIS_BRANCH"
fi

docker build -t $CONTAINER_NAME .
docker tag $CONTAINER_NAME:$TAG $CONTAINER_REGISTRY_URL:$TAG
docker push $CONTAINER_REGISTRY_URL:$TAG
