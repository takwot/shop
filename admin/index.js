const express = require("express");

const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, "dist")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(1000, () => {
  console.log("Running");
});
