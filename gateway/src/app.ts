import express from "express";
import proxy from "express-http-proxy";

const app = express();

app.use("/customer", proxy("http://localhost:3002"));
app.use("/shopping", proxy("http://localhost:3001"));
app.use("/", proxy("http://localhost:3000"));

// app.get("/", (req, res, next) => {
//   res.send("Hey there");
// });

app.listen(3003, () => {
  console.log("Gateway on 3003");
});
