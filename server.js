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

// app.get("/", (req,res) => {
//     res.send("hello world")
// })

var PORT = process.env.PORT || 3001;

// let db = require("./models");

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// app.use(express.static("./client/public"))

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

// require("./routes/api-routes")(app);

app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT)
})

// db.sequelize.sync({ force: true }).then(function () {
//     app.listen(3001, function () {
//         console.log("App listening on PORT " + PORT);
//     });
// });

