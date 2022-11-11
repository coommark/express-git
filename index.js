const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("listening");
    res.send("Working");
});

app.listen(3000);
