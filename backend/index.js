const express = require("express");
const cors = require("cors");

const ItemRouter = require("./router/ItemsRouter");

const app = express();

app.use(express.json({}));
app.use(cors());

app.use("/api", ItemRouter);

app.listen(5000, () => {
  console.log("Server is running");
});
