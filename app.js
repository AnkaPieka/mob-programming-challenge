require("dotenv").config();
require("./config/mongodb");

const express = require('express')
const hbs = require('hbs')
const app = express()

app.use(express.static(__dirname + "/public")) ;
app.set("views", __dirname + "/views") ;
app.set("view engine", "hbs") ;
hbs.registerPartials(__dirname + "/views/partials");

const users = [{name: "", email: "", favoriteLangage: ""}]

const images = ["/img/image-1.jpg", "/img/image-2.jpg", "/img/image-3.jpg"]

app.get("/", (request, response) => {
    response.render("home", images);
});

app.get("/my-dev-squad", (request, response) => {
    response.render("allUsers", users);
});

app.get("/add-new-ironhacker", (request, response) => {
    response.render("formUser");
});

app.listen(process.env.PORT, () => {
    console.log("Ready @ http://localhost:" + process.env.PORT)
})