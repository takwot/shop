const { Router } = require("express");
const {
  CreateItem,
  GetItems,
  DeleteItem,
  UpdateItem,
} = require("../contollers/ItemsController");

const router = Router();

router.post("/items", CreateItem);
router.get("/items", GetItems);
router.delete("/items", DeleteItem);
router.patch("/items", UpdateItem);

module.exports = router;
