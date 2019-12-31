FROM	debian:latest
MAINTAINER Vijo Cherian codervijo@gmail.com

RUN	apt-get -y update && apt-get -y upgrade
RUN apt-get -y install git vim wget nodejs
RUN	apt-get -y install procps net-tools ssh

RUN mkdir /usr/src/app

WORKDIR /usr/src/app
 
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
 
#used by react native builder to set the ip address, other wise 
#will use the ip address of the docker container.
ENV REACT_NATIVE_PACKAGER_HOSTNAME "192.168.42.14"

# Following block allows node to be run as a regular user
#ENV USERNAME dev
#RUN useradd -rm -d /home/dev -s /bin/bash -g root -G sudo -u 1005 ${USERNAME}
#COPY *.sh /
#RUN chmod +x /entrypoint.sh \
#    && chmod +x /get-source.sh
#https://github.com/nodejs/docker-node/issues/479#issuecomment-319446283
#should not install any global npm packages as root, a new user 
#is created and used here
#USER $USERNAME
#set the npm global location for dev user
#ENV NPM_CONFIG_PREFIX "/home/$USERNAME/.npm-global"
#RUN mkdir -p ~/src \
#    && mkdir ~/.npm-global \
#    && npm install expo-cli --global


# Install Node
ENV NODE_VERS v13.5.0
RUN mkdir -p /usr/src/app/node/
RUN wget -O- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
RUN chmod ugo+x /root/.nvm/nvm.sh
ENV NVM_DIR /usr/src/app/node
RUN  . /root/.nvm/nvm.sh && nvm install node
ENV PATH   ${NVM_DIR}/versions/node/${NODE_VERS}/bin/:$PATH

RUN     npm install 
RUN     npm install react-scripts@3.0.1 -g --silent
RUN     npm install expo-cli --global

#CMD	["npm", "start"]
