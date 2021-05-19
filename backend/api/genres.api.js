var express = require("express");

var router = express.Router();

const genresController = require("../controllers/genres.controller");

router.post("/", genresController.createGenre);
router.get("/", genresController.getGenres);

module.exports = router;