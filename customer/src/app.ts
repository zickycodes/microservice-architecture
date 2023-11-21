import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hey there on customer");
});

app.listen(3002, () => {
  console.log("customer on 3002");
});
