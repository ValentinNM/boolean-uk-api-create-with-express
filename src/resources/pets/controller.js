const Pet = require("./model");

const db = require("../../utils/database");

Pet();

const router = require("./router");

function addOnePet(req, res) { 
    // console.log("inisde addNewPet: ", req.body);
    // res.json({dv : true})

    const petToAdd = {
        ...req.body
    };

    console.log("petToAdd: ", petToAdd);

    const creatingPet = `
        INSERT INTO pets (name, age, type, breed, microchip)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;

    const { name, age, type, breed, microchip } = petToAdd;
    db.query(creatingPet, [name, age, type, breed, microchip])
    .then((result) => res.json({data : result.rows[0]}))
    .catch(console.error);
}

module.exports = {addOnePet}