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
npm run docker-start
```

And visit http://localhost:8000

#### Tests

Run integration tests in console

```bash
npm run test
```

Open Playwright UI client

```bash
npm run test-ui
```

#### Project Structure

Files are organized as given in specification example.

[HeadlessUI](https://headlessui.com/) is used instead of base html tags like `<input>`
to provide a better starting point for building custom UI.

#### NPM Commands

```bash
npm start            # run local server
npm run build        # build to plain html and js
npm run docker-start # run server inside container
npm run docker-debug # visit container to inspect
npm run test         # run tests in console
npm run test-ui      # run tests in ui client
```

#### Specification

[SPECIFICATION.md](./SPECIFICATION.md) requirements and progress on completing them
