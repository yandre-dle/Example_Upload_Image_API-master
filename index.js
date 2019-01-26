const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// port localnya
var port = 1998;

//port jika di upload ke heroku
//const port = process.env.PORT || 1997

var app = express({defaultErrorHandler:false});

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send('<h1>Selamat Datang di API!</h1>')
})

const {
    brandRouter
} = require('./routers')

app.use('/brand', brandRouter)


app.listen(port, () => console.log('API Aktif di port ' + port))