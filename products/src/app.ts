import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hey there on products");
});

app.listen(3000, () => {
  console.log("products on 3000");
});
