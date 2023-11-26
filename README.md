# MOUNTAIN
#### Video Demo:  <URL 'https://youtu.be/iRB-UYBmmSw'>
#### Description:

The application allows you to book a guided tour of the Caucasus Mountains.

Project include 2 main folders: client and server.

I desided to select javascript framework Vue for client because it simplifies and speeds up development in Javascript.

#### Client folder structure:
1. public/favicon.icon - favicon for the app
2. src:
  - assets/images/* - static images of places
  - assets/base.css - base styles of the app
  - assets/logo.png - app logo image
  - assets/main.css - styles for some parts of the app

  - components/NavMenu.vue - code for navigation part of the app
  - components/PageHeading.vue - code for the app headings

  - data/nav-routes.ts - routes list used in the app for navigation panel
  - data/tours.ts - array whit objects of tours

  - plugins/vutify.ts - config file for vuetify (ui library) 

  - router/index.ts - routing rules for the app

  - stores/reservation.ts - stores information about tours, guides, reservation, etc. and defines actions with them
  - stores/settings.ts - stores some settings of the app that is used on client, for example whether the client uses cell phone or computer

  - views/* - files whth code of the corresponding website pages such as About, Contacts, Home, Reservation and Tours. The are tied to specific routes in a Vue Router setup (router/index.ts).

  - App.vue - the root Vue component that acts as a layout for the entire application. 
  - main.ts - the entry point for the Vue application.
3. .eslintrc.cjs - rules for code linting
4. .gitignore - specifies intentionally untracked files that Git should ignore.
5. .prettierrc.json - rules for code formatting
6. Dockerfile, Dockerfile, dev - the build instructions to build the image for Docker (container-based system for application)
7. env.d.ts - declaration file that contain only type information; only used for typechecking.
8. index.html - entry point for app to inject compiled javascript.
9. package.json - represents top-level dependencies on other packages using semantic versioning.
10. package-lock.json - block dependencies on a specific version number.
11. tsconfig.json, tsconfig.app.json, tsconfig.node.json - specifies the root files and the compiler options required to compile the project.
12. vite.config.ts - Vite's settings and plugins. (Vite is a tool for building web application quickly)
13. README.md - describes vue app and include commands to run it separately from the Docker container

#### Server folder structure:
1. src:
  - */dto/*.dto.ts - all dto files are objects used to validate data and define data structure sent into Nest application.
  - */models/*.models.ts - all model files used to define, type-check and validate objects in the application.
  - */*.controller.ts - handling incoming requests and returning responses to the client.
  - */*.module.ts - provides metadata that Nest makes use of to organize the application structure.
  - */*.service.ts - used to interact with database (as data storage and retrieval) and injected as a dependency to controllers.
  - app.controller.ts - a basic controller with a single route.
  - app.module.ts - the root module of the application.
  - app.service.ts - a basic service with a single method.
  - main.ts - the entry file of the application which uses the core function NestFactory to create a Nest application instance.
2. .eslintrc.cjs - rules for code linting
3. .gitignore - specifies intentionally untracked files that Git should ignore.
4. .prettierrc.json - rules for code formatting
5. Dockerfile, Dockerfile, dev - the build instructions to build the image for Docker (container-based system for application)
6. nest-cli.json - specifies the root files and the compiler options required to compile the project.
7. package.json - represents top-level dependencies on other packages using semantic versioning.
8. package-lock.json - block dependencies on a specific version number.
9. README.md - describes nest app and include commands to run it separately from the Docker container

### docker-compose.yml
config file for Docker Compose. It allows to deploy, combine, and configure multiple docker containers at the same time. The Docker "rule" is to outsource every single process to its own Docker container.


## Running the app
To run the project you need to have docker and docker compose installed.

```bash
$ docker compose build
$ docker compose up
```