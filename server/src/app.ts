import express from "express";

const app = express();
const port = 3000;
app.get("/", (req: any, res: any) => {
  return res.send("hello");
});
app.listen(port, () => {
  return console.log(`olá ${port}`);
});
