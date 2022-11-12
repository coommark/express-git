const express = require("express");
const { logger } = require("./controllers");
const router = express.Router();

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

module.exports = router;
