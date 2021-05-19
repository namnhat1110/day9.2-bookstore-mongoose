var express = require('express');
var router = express.Router();

var authorsRouter = require("./authors.api");
var booksRouter = require("./books.api");
var genresRouter = require("./genres.api");

router.use("/authors", authorsRouter);
router.use("/books", booksRouter);
router.use("/genres", genresRouter);

module.exports = router;
