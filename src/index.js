require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const db = require("./utils/database");
const Book = require("./resources/books/model");
const Pet = require("./resources/pets/model");

/* IMPORT ROUTERS */

const app = express();

/* SETUP MIDDLEWARE */

app.use(morgan("dev"));
app.use(express.json());

/* SETUP ROUTES */
const booksRouter = require("./resources/books/router"); 
app.use("/books", booksRouter);

// step I
// I.1 -> create the routes/ check the routes
const petsRouter = require("./resources/pets/router");
app.use("/pets", petsRouter); // I.2 -> adding "petsRouter" as an argument for calling it and checking the end point route in the browser.

// below is the hard-coded alternative of the impoted route: petsRouter 
// app.use("/pets", (req, res) => { 
//  console.log("here", req.body)
//  res.json({ test : "object"})
// });

/* CATCH-ALL TO TEST ROUTES */

app.get("*", (req, res) => {
  res.json({ ok : true });
});

/* START SERVER */

const port = 3030;

app.listen(port, () => {
  db.connect((error) => {
    if (error) {
      console.error("[ERROR] Connection error: ", error.stack);
    } else {
      console.log("\n[DB] Connected...\n");

      Book();
      Pet();
    }
  });

  console.log(`[SERVER] Running on http://localhost:${port}/`);
});
