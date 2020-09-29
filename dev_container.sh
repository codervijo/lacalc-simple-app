#!/bin/bash

# Make sure b2b directory exists and is git clone of right project
[ -d ./b2b ] || (echo "B2B GIT repo not found, exiting"; exit 77); [ "$?" -eq 77 ]  && exit 2

CONTAINER=larn2

# Make symlink to docker for this dev environment
#ln -sf b2b/apps/react-native/Dockerfile .

# Init container
sudo docker build --tag ${CONTAINER}:latest --cache-from ${CONTAINER}:latest -t ${CONTAINER} .

# Start Dev container
sudo docker run -p19000:19000 -p19001:19001 -p19002:19002 -p19003:19003 -p19004:19004 -p19005:19005 -p19006:19006 -v${PWD}:/usr/src/app/larn2 -it ${CONTAINER}  /bin/bash
# export REACT_NATIVE_PACKAGER_HOSTNAME=10.44.144.237
