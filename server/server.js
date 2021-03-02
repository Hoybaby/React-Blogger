const express = require('express')
const app = express();
const mysql = require('mysql') 

const db = mysql.createConnection({
    user: 'root',
    host:'localhost',
    password: 'password',
    database: 'react_blogger'
});

app.post('/blogs', (req,res) => {
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

