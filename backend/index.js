const express = require("express");
const cors = require("cors");

const ItemRouter = require("./router/ItemsRouter");
const client = require("./db");

const app = express();

app.use(express.json({}));
app.use(cors());

app.use("/api", ItemRouter);
app.get("/api/create-list", (req, res) => {
  client
    .query(
      "create table items(ID SERIAL PRIMARY KEY, name varchar(255), description varchar(255),telegramm varchar(255));"
    )
    .then(() => {
      res.json({ message: "Success" }).statusCode(200);
    })
    .catch(err => {
      console.log(err);
      res.json({ message: "Fail" }).statusCode(500);
    });
});

app.listen(5000, () => {
  console.log("Server is running");
});
