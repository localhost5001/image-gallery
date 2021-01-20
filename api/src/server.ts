import { getPostgresClient } from "./postgres";
import express from "express";

/** Connect to the database then start the API server */
getPostgresClient()
  .then((pgClient) => {
    const app = express();

    app.get("/", (req, res) => {
      res.send("Hello world!");
    });

    app.get("/now", async (req, res) => {
      const data = await pgClient.query("SELECT NOW() as now");
      res.send(data.rows[0].now);
    });

    app.listen(8080, () => {
      console.log("API server ready at http://localhost:8080");
    });
  })
  .catch((err) => {
    console.error("Error connecting to postgres: ", err);
  });
