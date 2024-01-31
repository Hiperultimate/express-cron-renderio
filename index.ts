import express, { Express, Request, Response } from "express";
import cron from "node-cron";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  console.log("Logging into the console...");
  res.send("A cron server!");
});

cron.schedule("*/2 * * * *", () => {
  console.log("A cron job that runs every 2 minutes");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
