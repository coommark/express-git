const express = require("express");
const { logger } = require("./controllers");
const router = express.Router();

const printer = (req, res, next) => {
    console.log("RAN MIDDLEWARE");
    next();
};

router.use(printer);

router.get("/", (req, res) => {
    logger();
    res.json([
        {
            name: "Mark Melton",
            career: "Programmer",
        },
        {
            name: "Count Chakula",
            career: "Comedian",
        },
    ]);
});

router.get("/single", (req, res) => {
    logger();
    res.json({
        name: "Mark Melton",
        career: "Programmer",
    });
});

module.exports = router;
