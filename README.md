# Setup

**Requires docker**

To run the project locally, you can use a single command from the root of the project:

```bash
docker-compose up
```

This may take a while on the first run as the `postgres` and `node` docker images are downloaded.

Once you see logs from the `postgres` service saying "database system is ready to accept connections", you will need to import the database schema and records:

```bash
docker-compose exec postgres psql -U postgres -d photos -f /migration/migration.sql
```

This command will initialize your database with pre-populated `photo`, `collection`, and `photographer` tables.

## Running locally

After the initial setup above, you can run the local environment at any time with:

```bash
docker-compose up
```

Both the `api` and `web` servers will automatically restart as you make code changes.

# Codebase structure

You will need to work within the `web` and `api` subdirectories of this repo.

### web

The `web` directory contains a template React frontend using [Create React App](https://create-react-app.dev/docs/getting-started/) with TypeScript enabled. No changes have been made to the default CRA setup, so see their documentation for how to go about making changes. Once started, the web server is accessible from `http://localhost:3000`

### api

The `api` directory has a boilerplate Express server written in TypeScript. The server is set up to get a Postgres connection and then listen at `http://localhost:8080`. We have provided an existing Postgres connection, but feel free switch to a different package for interacting with the database.

# Installing npm packages

You may install any packages that will help you on the front or back end. However, note that we may ask you about your dependency decisions in the follow-up interview, so be prepared to justify your choices.

To install packages, you **cannot** run `yarn` or `npm` commands directly. These commands must be run through docker while you have the containers running:

```bash
docker-compose exec api yarn add ...
```

or

```bash
docker-compose exec web yarn add ...
```
