const express = require("express");

const { addOneBook, getAll, gettingBookById } = require("./controller")

const router = express.Router();

router.post("/", addOneBook);

router.get("/", getAll);

router.get("/:id", gettingBookById);

module.exports = router;