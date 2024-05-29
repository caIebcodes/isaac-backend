import { Request, Response } from "express";
import querystring from "node:querystring";
import "dotenv/config";

import genString from "../utils/genString";

export default function login(req: Request, res: Response): void {
  const state = genString(16);
  const scope =
    "user-read-private user-top-read user-follow-modify user-read-recently-played user-read-playback-position playlist-read-collaborative streaming user-read-playback-state playlist-modify-public user-library-modify user-follow-read user-read-currently-playing user-library-read playlist-read-private playlist-modify-private";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope,
        redirect_uri:
          process.env.PRODUCTION?.toLowerCase() == "true"
            ? "https://iauth.durev.net/callback"
            : `http://localhost:${process.env.PORT}/callback`,
        state,
        show_dialog: false,
      })
  );
}
