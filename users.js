const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
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
