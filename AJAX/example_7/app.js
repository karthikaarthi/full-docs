const express = require("express");
// const methodOverride = require("method-override");
const app = express();

// app.use(methodOverride('X-HTTP-Method-Override'));

app.get("/", (req, res) => {
    res.sendFile("C:\\Users\\STUDENT\\Desktop\\AJAX\\example_7\\index.html");
})


app.patch("/patch", (req, res) => {
    console.log("patch request work");
});

app.delete("/delete", (req, res) => {
    console.log("delete request work");
});




app.listen(3000, () => console.log("Running ..."));