const Genre = require("../models/genre");

const createGenre = async (req, res) => {
    try {
        const genre = new Genre({ name: req.body.name });

        await genre.save();

        res.status(201).json({
            success: true,

            data: genre,

            message: `Genre ${genre.name} created!`,
        });
    } catch (err) {
        res.status(400).json({
            success: false,

            error: err.message,
        });
    }
};

const getGenres = async (req, res) => {
    try {
        const genres = await Genre.find({});

        res.status(200).json({
            success: true,

            data: genres,

            message: `${genres.length} genres found!`,
        });
    } catch (err) {
        res.status(400).json({
            success: false,

            error: err.message,
        });
    }
};

module.exports = {
    createGenre,
    getGenres,

};