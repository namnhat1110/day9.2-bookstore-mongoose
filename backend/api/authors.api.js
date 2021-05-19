var express = require('express');
var router = express.Router();

const authorsController = require("../controllers/authors.controller");

router.post("/", authorsController.createAuthor);
router.get("/:id", authorsController.getSingleAuthor);
router.patch("/:id", authorsController.updateAuthor);
router.delete("/:id", authorsController.deleteAuthor);

module.exports = router;
