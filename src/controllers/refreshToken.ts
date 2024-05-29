import axios from "axios";
import { Request, Response } from "express";
import querystring from "node:querystring";
import "dotenv/config";

export default async function refreshToken(req: Request, res: Response) {
  let refreshToken = req.query.token;

  const query = querystring.stringify({
    grant_type: "refresh_token",
    refresh_token: String(refreshToken),
    redirect_uri:
      process.env.PRODUCTION?.toLowerCase() == "true"
        ? "https://iauth.durev.net/callback"
        : `http://localhost:${process.env.PORT}/callback`,
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
  });
  const time = new Date();

  await axios
    .post(`https://accounts.spotify.com/api/token?${query}`)
    .then((r) =>
      res.status(200).json({
        refresh_token: r.data.refresh_token || null,
        access_token: r.data.access_token,
        gen_time: time.getTime(),
      })
    )
    .catch(() => res.status(401).send("Not authorized"));
}
