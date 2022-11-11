const express = require("express");
const users = require("./users");

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

app.use("/api/users", users);

app.listen(3000);
