const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Working");
});

app.get("/api", (req, res) => {
    res.json({
        status: "success",
        message: "This is from the API",
    });
});

app.listen(3000);
