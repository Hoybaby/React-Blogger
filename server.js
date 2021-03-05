const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');

// app.use(cors());
// app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host:'localhost',
    password: 'password',
    database: 'react_blogger'
});

app.get("/", (req,res) => {
    res.send("hello world")
})


//test with postman
//create modules

app.post('/api/insert', (req,res) => {
    const title = req.body.title;
    const body = req.body.body;
    const author = req.body.author;

    db.query('INSERT INTO blogs(title,body,author) VALUES(?,?,?)',[title, body, author]),
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("values inserted")
        }
    }
    
})

app.listen(3001, () => {
    console.log("Server is Working on 3001")
})

