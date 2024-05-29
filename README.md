<h2>ISAAC back-end</h2>
this handles the client's authentication with spotify. you need to have this running for isaac's client to work because it communicates directly with this server to authenticate.

<h3>usage</h3>
- create a spotify developer app on their developer website and get their client credentials.<br/>
- set your app's settings to point to http://localhost:8080/callback<br/>
- if you want to use another port, set it to that instead of 8080<br/>
- install packages using `npm i`<br/>
- start with `PORT=desired_port SPOTIFY_CLIENT_ID=client_id SPOTIFY_CLIENT_SECRET=client_secret npm start`<br/>
