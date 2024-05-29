<h2>ISAAC back-end</h2>
this handles the client's authentication with spotify. you need to have this running for isaac's client to work because it communicates directly with this server to authenticate.

<h3>usage</h3>
- create a spotify developer app on their developer website and get their client credentials.

- set your app's settings to point to http://localhost:8080/callback

- if you want to use another port, set it to that instead of 8080

- install packages using `npm i`

- start with `PORT=desired_port SPOTIFY_CLIENT_ID=client_id SPOTIFY_CLIENT_SECRET=client_secret npm start` where desired_port, client_id and client_secret are the credentials and port from the earlier steps.

- you can also set these environment variables by creating an .env file at the root directory as per the template there. then just run `npm start`.
