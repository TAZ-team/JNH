require("dotenv").config()
const express = require("express");
const app = require("express")();
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const path = require("path");

const controller = require("./controller")


app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

massive(process.env.DATABASE_URL).then(db => {
    console.log("connected to db");
    app.set("db", db);
  })
  .catch(error => console.error(error));

app.use(
  session({
    secret: "super simple",
    maxAge: 500000,
    resave: true,
    saveUninitialized: true
  })
);

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());

app.listen(process.env.PORT || 8080, () => {
  console.log("listening");
});
