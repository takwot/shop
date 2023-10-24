const client = require("../db");

const CreateItem = (req, res) => {
  const { name, description, date, telegramm } = req.body;

  client
    .query(
      "INSERT INTO items (name, description,date, telegramm) VALUES ($1, $2, $3, $4) RETURNING ID",
      [name, description, date, telegramm]
    )
    .then(data => {
      res.json({ message: "Success", id: data.rows[0].id });
    });
};

const GetItems = (req, res) => {
  client
    .query("SELECT * FROM items;")
    .then(data => {
      res.json({ status: true, data: data.rows });
    })
    .catch(() => res.json({ status: false }));
};

const DeleteItem = (req, res) => {
  const { id } = req.query;

  client.query("DELETE FROM items WHERE id=$1", [id]);

  res.json({ message: "Success" });
};

const UpdateItem = (req, res) => {
  const { name, description, date, telegramm, id } = req.body;

  client
    .query("UPDATE items SET name=$1, description=$2, date=$3, telegramm=$4", [
      name,
      description,
      date,
      telegramm,
    ])
    .then(data => {
      res.json({ message: "Success" });
    });
};

module.exports = {
  CreateItem,
  GetItems,
  DeleteItem,
  UpdateItem,
};
