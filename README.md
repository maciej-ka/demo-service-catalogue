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

#### Tests

To run all tests and checks

```bash
npm run test
```

For more fine grained, check
Open Playwright UI client

```bash
npm run test-ui
```

#### Project Structure

Files are organized as given in specification example.

[HeadlessUI](https://headlessui.com/) is used instead of base html tags like `<input>`
to provide a better starting point for building custom UI.

#### npm Commands

```bash
npm start                # run local server
npm run build            # build to plain html and js
npm run start:docker     # run server inside container
npm run docker:debug     # inspect container in bash
npm run test             # run all tests and checks
npm run test:integration # run integration tests in console
```

#### Specification

[SPECIFICATION.md](./SPECIFICATION.md) requirements and progress on completing them
