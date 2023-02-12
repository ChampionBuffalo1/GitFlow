# Gitwork

It's a simple Next 13 App that displays a Github user's connection as a network graph

## Running locally

The app by default runs on port `3000`.

Clone the project

```bash
git clone https://github.com/ChampionBuffalo1/Gitwork.git
```

[Yarn](https://yarnpkg.com/):

```bash
yarn install
yarn build
yarn start
```

[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#checking-your-version-of-npm-and-nodejs):

```bash
npm install
npm run build
npm run start
```

### Docker Support

If you have `docker` installed you could run the app inside a container using `node-alpine` docker image.

[Docker](https://www.docker.com/)

```bash
docker build -t gitflow:latest .
docker run -d -p 3000:3000 --rm --name "gitflow" gitflow:latest
...
...
docker stop gitflow
```

[Docker Compose](https://docs.docker.com/compose/)

There is also a `docker-compose.yml` file that can be used with the `compose` plugin of docker to run and build containers.

```bash
docker compose up -d
...
...
docker compose down
```
