const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('./public'));

// Home
app.get('/', (req, res)=>{
    res.render('home');
});

// Conexão com o Banco de Dados
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'node_mysql'
})

connection.connect(function (err) {
    if(err) {
        console.log('Error connecting to Database');
        return;
    }
    console.log('Connection established');
    app.listen(3000)
})
