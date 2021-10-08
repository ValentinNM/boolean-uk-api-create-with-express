const Book = require('./model');
const db = require("../../utils/database")

Book();

function addOneBook(req, res) { 
    const bookToAdd = { 
        ...req.body
    };
        
    // res.json({data: "result.-testing" })
    console.log("bookToAdd: ", bookToAdd);

    const creatingBook = `
        INSERT INTO books (title, type, author, topic, publicationDate)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;

    db.query(creatingBook, [bookToAdd.title, bookToAdd.type, bookToAdd.author, bookToAdd.topic, bookToAdd.publicationDate])
    .then((result) => res.json({data : result.rows[0]}))
    
    // .then((result) => {
    // console.log(result.rows[0])
    // res.json({data: result.rows[0] })
    // })
    .catch(console.error);
}

function getAll (req, res) { 
    const getAllBooks = `
    SELECT *
    FROM books
    `;

    console.log("res: ", res)
    db.query(getAllBooks)
    .then((result) => 
    res.json({ data: result.rows })
    )
    .catch(console.error);
}

function gettingBookById (req, res) {
    // console.log("gettinBookById res: ", res)

    const idToGet = req.parmas.id;

    const getOnebyId = `
    SELECT *
    FROM books
    WHERE id = $1;
    `

    db.query(getOneById, [idToGet])
    .then((result) => res.json({ data: result.rows[0] }))
    .catch(console.error);
}

module.exports = { addOneBook, getAll, gettingBookById }