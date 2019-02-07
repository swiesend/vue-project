FROM ubuntu:18.04 as install-stage
MAINTAINER sebastian@wiesendahl.de

# prepare
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get -y install apt-transport-https 
RUN apt-get -y install apt-utils ca-certificates curl wget gnupg
RUN apt-get -y install lsb-release
RUN apt-get -y install git build-essential cmake automake

# install nodejs and npm
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get -y install nodejs
RUN node --version
RUN npm --version

# Building for production... Error: Failed to launch chrome!
# see: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
# "can run `ldd chrome | grep not` to check which dependencies are missing"
RUN apt-get -y install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1\
    libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0\
    libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcomposite-dev libxcursor1\
    libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 fonts-liberation libappindicator1\
    libnss3 xdg-utils libx11-xcb-dev libgl1

ENV NODE_ENV production
WORKDIR /app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --only=dev
RUN npm install
COPY . .

# build stage
FROM install-stage as build-stage
RUN npm run build

# production stage
FROM nginx:1.15.8-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
