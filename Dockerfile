FROM node:12-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Build frontend
FROM base as build-frontend
COPY ./ ./

## Clear cache NPM
RUN npm cache clean --force

## Install frontend
RUN npm install
RUN npm run build

# Release
FROM base AS release
COPY --from=build-frontend /usr/app/dist ./public
COPY ./server/package.json ./
COPY ./server/index.js ./
RUN npm install --only=production

ENV PORT=8000
ENV STATIC_FILES_PATH=./public

EXPOSE 8000
ENTRYPOINT [ "node", "index" ]
