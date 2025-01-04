### Demo of a React Service

#### Hosted on Vercel

https://demo-service-catalogue.vercel.app/

#### Run on localhost

```bash
git clone https://github.com/maciej-ka/demo-service-catalogue.git
cd demo-service-catalogue
npm i
npm start
```

And visit http://localhost:5173

#### Docker

Dockerfile contains nginx production setup.  
To test container locally

```bash
npm run start:docker
```

And visit http://localhost:8000

There is also a debug command in case image has  
problems and needs to be inspected in bash

```bash
npm run debug:docker
```

#### Tests

Project has these tests and checks  
reported with github actions in pull requests

- prettier `npm run test:prettier`
- eslint `npm run test:linter`
- typescript `npm run test:typescript`
- playwright `npm run test:integration`

Run them all locally

```bash
npm test
```

Fix Linter and Prettier

```bash
npm run linter:fix
npm run prettier:fix
```

Start Playwright UI client

```bash
npm run test:integration:ui
```

#### Project Structure

Files are organized as given in specification example.

[HeadlessUI](https://headlessui.com/) is used instead of base html tags like `<input>`  
to provide a better starting point to build a custom UI.

#### Specification

[SPECIFICATION.md](./SPECIFICATION.md) requirements and progress on completing them
