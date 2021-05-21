var express = require('express');
var router = express.Router();

var authorsRouter = require("./authors.api");
var booksRouter = require("./books.api");
var genresRouter = require("./genres.api");
var usersRouter = require("./users.api");
var authRouter = require("./auth.api");

router.use("/authors", authorsRouter);
router.use("/books", booksRouter);
router.use("/genres", genresRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

module.exports = router;
