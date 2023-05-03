import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
const app = express();

const historiaBrasil = path.join(__dirname, "historia_brasil.json"); //aqui estou pegando o diretório do arquivo json e atribuindo-o a uma constante
const economia = path.join(__dirname, "economia.json");
const politicaInternacional = path.join(
  __dirname,
  "politica-internacional.json"
);

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

const port = 3000;
app.get("/", (req: any, res: any) => {
  return res.send("hello");
});

//método http app.get
//a function representa o middleware

app.get("/historia-brasil/:id", function (req: any, res: any) {
  const { id } = req.params;
  const readable = fs.readFileSync(historiaBrasil).toString(); //fs com o método readFileSync lê o meu arquivo JSON. nesse caso, botei dentro de uma constante readable
  const readableObject = JSON.parse(readable);
  const readableFilter = readableObject.filter((item: any) => {
    return item.id == id;
  });
  console.log(id);

  res.send(readableFilter); //dando a resposta com o método send de readable, a constante com o string que foi lido em readFileSync
});
app.get("/economia", function (req: any, res: any) {
  const readable = fs.readFileSync(economia).toString();
  res.send(readable);
});
app.get("/politica-internacional", function (req: any, res: any) {
  const readable = fs.readFileSync(politicaInternacional).toString();
  res.send(readable);
});

app.listen(port, () => {
  return console.log(`olá ${port}`);
});
