import axios, { AxiosResponse, AxiosError } from "axios";
import querystring from "node:querystring";

export async function getToken(code: string): Promise<object> {
  let res = {};
  const query = querystring.stringify({
    grant_type: "authorization_code",
    code: code,
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
    .then((r: AxiosResponse<any>) => {
      res = {
        access_token: r.data.access_token,
        refresh_token: r.data.refresh_token,
        gen_time: time.getTime(),
      };
    })
    .catch((err: AxiosError) => {
      throw new Error(
        `Could not retrieve authentication token: ${err.response?.statusText}`
      );
    });

  return res;
}
