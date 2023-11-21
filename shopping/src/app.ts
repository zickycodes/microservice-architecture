import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hey there on shopping");
});

app.listen(3001, () => {
  console.log("shopping on 3001");
});
