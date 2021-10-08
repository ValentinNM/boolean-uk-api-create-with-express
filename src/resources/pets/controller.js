const Pet = require("./model");

const db = require("../../utils/database");

Pet();

const router = require("./router");

function addOnePet(req, res) { 
    console.log("inisde addNewPet: ", req.body);
    res.json({dv : true})
}

module.exports = {addOnePet}