//* Just a tutorial about basics

// @ Importing all Stuff ------
const express = require("express"); //---> express import
const path = require("path"); //---> path import
const fs = require("fs"); //---> fs import
const app = express();
const port = 3000;

//@  EXPRESS SPECIFIC CONFIGURATION --------------

app.use("/public", express.static("public")); // For serving static files
app.use(express.urlencoded()); // This help render the html file..

//@  PUG SPECIFIC CONFIGURATION --------------

app.set("view engine", "pug"); // Set the template engine as PUG
app.set("views", path.join(__dirname, "views")); // Set the directory where the pug file locate..

//@ SITE'S ENDPOINTS  --------------

app.get("/", (req, res) => {
  const params = { headline: "Your in Right place" };
  res.status(200).render("index.pug", params); // here rendering the page..
});
app.get("/about", (req, res) => {
  const params = {};
  res.status(200).render("about.pug", params);
});
app.get("/contact", (req, res) => {
  const params = {};
  res.status(200).render("contact.pug", params);
});
app.post("/contact", (req, res) => {
  console.log(req.body);
  console.log("success??]]");
});

//@ START THE SERVER -------------

app.listen(port, () => {
  console.log(`The application started successfully on http://localhost:${port}`);
});
