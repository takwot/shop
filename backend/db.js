const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "shop",
  password: "qwerty",
  port: "5432",
});

client.connect(err => {
  if (err) {
    console.log("connecting error: ", err.stack);
  } else {
    console.log("connected");
  }
});

module.exports = client;
