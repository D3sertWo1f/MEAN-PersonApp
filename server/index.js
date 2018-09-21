const express = require("express");
const app = express();
const morgan = require("morgan");
const { mongoose } = require('./database')
const cors = require("cors");

//settings

app.set('port', process.env.PORT || 3000)

//middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


//routes
app.use('/API/persons', require('./routes/persons.routes'));

//server init
app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`)
})