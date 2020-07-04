##Description
This is a POC for how multiple SPAs can be run

## Project Setup

#### Client SPA Application

- Go to client application folder

  `cd client`

- Run `yarn`

- Run `yarn start --https --port 8501`

#### Calendar SPA Application

- Go to client application folder

  `cd calendar`

- Run `yarn`

- Run `yarn start --https --port 8502`

#### SPA Root Application

- Go to root-config folder
  `cd root-config`

- Run `yarn`

- Run `yarn start --https`

#### Result

The application will be accessible `https://localhost:9000`

- Client App `https://localhost:9000/client`
- Calendar App `https://localhost:9000/calendar`
