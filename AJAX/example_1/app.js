const express = require("express");
const path = require("path");
const app = express();

const filePath = path.join(__dirname, "./index.html");

app.get("/", (req, res) => {
    res.sendFile(filePath);
});

app.get("/content", (req, res) => {
    res.send("<p> Response From Express Server </p>");
});

app.listen(3000, () => console.log("Server is running ...."));