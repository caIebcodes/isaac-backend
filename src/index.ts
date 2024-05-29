import Express, { Request, Response } from "express";

import callback from "./routes/callback";
import login from "./routes/login";
var cors = require("cors");
import refreshToken from "./routes/refreshToken";

const app = Express();
app.use(Express.json());
app.use(cors());
app.use("/", login);
app.use("/", callback);
app.use("/", refreshToken);
app.get("/", (_, res: Response) => {
  res.redirect("/login");
});

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
