# pwa-angular

A Progressive Web App (PWA) example built with Angular. This repository contains a small insurance management demo application with a client-side Angular frontend and a minimal in-memory Node.js backend used for development and demonstration.

## Table of contents

- **Project overview**: brief description and purpose
- **Features**: what the app demonstrates
- **Prerequisites**: software required to run the project
- **Setup**: how to install dependencies and run locally
- **Development**: commands for running the frontend and backend
- **Build & PWA**: how to produce a production build and enable the service worker
- **Testing**: how to run unit and E2E tests
- **Project structure**: major folders and files
- **Contributing**: how to contribute
- **License**n+

## Project overview

This project is a small demonstration of an Angular Progressive Web App. It includes:

- An Angular frontend (`src/`) that implements basic CRUD flows for insurance (`Seguro`) records and a simple navigation menu.
- A minimal in-memory Node.js backend (under `backend/`) that mimics a REST service for development and demo purposes.
- PWA configuration files such as `manifest.webmanifest` and `ngsw-config.json` for Angular Service Worker integration.

The app is intended for learning and demonstration of Angular features, PWA capabilities, and simple local backend mocking.

## Features

- Angular single-page application with routing
- Offline support via Angular Service Worker configuration (PWA)
- Simple in-memory backend to simulate API responses
- Components for listing and registering insurance entries

## Prerequisites

- Node.js (LTS recommended) and npm
- Angular CLI (optional, for local development commands)

## Setup

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd pwa-angular
npm install
cd backend && npm install && cd ..
```

Replace `<repo-url>` with your repository URL or omit the clone step if you already have the source.

## Development

Start the backend (development in-memory server):

```bash
node backend/index.js
```

Start the Angular development server:

```bash
npm start
# or with the Angular CLI
ng serve
```

By default the frontend runs on `http://localhost:4200` and the backend on the port defined in `backend/index.js` (check the file for the exact port).

## Build & PWA

Create a production build (this will also produce the assets used by the Angular Service Worker):

```bash
npm run build
# or
ng build --prod
```

After building, you can serve the `dist/` folder with any static server to test the production PWA behavior. The service worker configuration is in `ngsw-config.json` and the web manifest is `src/manifest.webmanifest`.

## Testing

Run unit tests (Karma + Jasmine):

```bash
npm test
```

Run end-to-end tests (Protractor):

```bash
npm run e2e
```

## Project structure

- `src/` — Angular application source
  - `app/` — main Angular app modules and components (components, services, models)
  - `manifest.webmanifest` — PWA manifest
  - `ngsw-config.json` — Service worker config
- `backend/` — minimal in-memory Node.js backend used for development
- `e2e/` — end-to-end test configuration and tests
- `angular.json`, `package.json`, `tsconfig.*` — build and configuration files

Key files to inspect:

- [src/app/components/listar-seguros/listar-seguros.component.ts](src/app/components/listar-seguros/listar-seguros.component.ts)
- [src/app/components/cadastro-seguro/cadastro-seguro.component.ts](src/app/components/cadastro-seguro/cadastro-seguro.component.ts)
- [backend/index.js](backend/index.js)
- [ngsw-config.json](ngsw-config.json)

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a topic branch for your changes
3. Add tests where appropriate
4. Open a pull request with a clear description of your changes

## License

This project includes a `LICENSE` file in the repository root. Review it for license details.
