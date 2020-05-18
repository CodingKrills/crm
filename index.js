require('./models/db');

const express = require('express')
const app = express()
const port = 3000

const bodyparser = require('body-parser');

//bp

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

const employeeConstant = require('./controllers/employeeController')

//ejs
app.set('view engine', 'ejs');

app.use('/employee', employeeConstant)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))