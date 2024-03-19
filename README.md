Hello! Are you new? Let me guide you!

## Libraries & Dependencies

In the Frontend, we use the React JS library under the Vite environment. For dependencies, we use Axios for making database requests with our API, PropTypes for specifying data types, React Router Dom for easy route creation, Slick Carousel for creating carousels quickly, Toastify for managing user alerts, React burger menu for quick implementation of the burger menu, and React Icons for footer icons.

In the Backend, we utilize the Express JS framework. For the database, we use MySQL, and dependencies are managed by Node JS. Notable dependencies include Multer for PDF uploads, JSON Web Token for authentication, Argon2 for password encryption, Nodemon for backend management and execution, CookieParser for parsing cookies, and JOI for ensuring data security and reliability.

## Organization

The project is structured into two main parts: the frontend and the backend, each with its own package JSON for managing node modules and corresponding dependencies.

## Frontend

asset: This directory contains images used in the project.

components: Components used in the application pages are stored here for better organization. For instance, CarouselJobs.jsx is imported into the home.jsx page for display.

contexts: Contains all contexts present on the site, such as the login context.

pages: All pages and their corresponding CSS are stored here. Pages are where elements are displayed to the user. For example, Jobs.jsx is the page for job listings.

services: Houses code snippets for time-saving operations, such as connecting with backend routes.

layout & app: These directories allow displaying necessary elements, such as the navbar or footer, on all pages.

main: The main entry point of our React application, where routing is configured.

## Backend

database: Contains JSON files for our tables' data, as well as SQL scripts for table creation. The client.js file connects our MySQL account.

router: Instead of writing everything in one router, we divide our routes into three parts. Here, we define a CRUD verb, an endpoint, and a function in the controller.

controllers: Houses backend route functions, which subsequently call our managers.

models: Stores manager files responsible for executing SQL queries towards the database.

validators: Data input is validated using JOI in the backend.

services: External function files called in the controllers.

middleware: Files in this directory are mainly for verifying the user.

## Configuration

## Concept

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying a pedagogical tool.

## Setup & Use

### Windows users

Be sure to run these commands in a git terminal to avoid [issues with newline formats](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats):

```
git config --global core.eol lf
git config --global core.autocrlf false
```

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm install`
- Create environment files (`.env`) in both `backend` and `frontend`: you can copy `.env.sample` files as starters (**don't** delete them)

### Available Commands

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools (will be executed on every _commit_, and refuse unclean code)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS

## Deployment with Traefik

> ⚠️ Prerequisites : You must have installed and configured Traefik on your VPS beforehand.
> https://github.com/WildCodeSchool/vps-traefik-starter-kit/

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- SSH_HOST : IP address of your VPS
- SSH_USER : SSH login to your VPS
- SSH_PASSWORD : SSH connection password to your VPS

And a public variable from the tab `/settings/variables/actions` :

- PROJECT_NAME : the name of the project used to create the subdomain.

> ⚠️ Warning : underscores are not allowed. They can cause trouble with the let's encrypt certificate

Use this same tab to add the other environment variables required for the project if any.

Only the backend will be accessible. The root path `"/"` will redirect to the dist folder on your frontend. In order to allow that, please uncomment the line as explain on `backend/src/app.js` (Line 102).
Because the backend will serve the front, the global variable VITE_BACKEND_URL will be set with an empty string.

Your url will be ` https://${PROJECT-NAME}.${subdomain}.wilders.dev/`.

### About the database

The database is automaticaly deployed with the name of your repo. During the build of the projet (`docker-entry.sh`), the `node migrate.js` command is executed in the backend. If you want to seed automaticaly your database using the `seed.js` script, replace the command _build_ on you `backend/package.json` by `node migrate.js && node seed.js`.

### About public assets (pictures, fonts...)

Don't use any public folder on your frontend. This folder won't be accessible online. You may move your public assets in the `backend/public` folder. Prefer [static assets](https://vitejs.dev/guide/assets) when possible.

### About Logs

If you want to access the logs of your online projet (to follow the deployement or to watch any bug error), connect to your VPS (`ssh user@host`).
Then, go on your specific project and run  `docker compose logs -t -f`.
