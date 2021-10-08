

const express = require("express");

const { addOnePet, getAll } = require("./controller");

const router = express.Router();

router.post("/", addOnePet);


// step II -> passing through as a
// router.post("/", (req, res) => { 
//     console.log("inside router post: ", req.body)
// });

// alternative of step II -> using get instead
// router.get("/", (req, res) => {
//     console.log("get router: ", res.json({ data : "string" }))
// } );

module.exports = router;