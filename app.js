const express = require("express");
const app = express();
const path = require("path");
const puerto = 3000;

app.use(express.static("public"));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, "views", "home.html")));

app.listen(puerto, () => console.log("Server is running in http://localhost:" + puerto));