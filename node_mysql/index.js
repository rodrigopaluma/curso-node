const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

// Configuração para pegar o body do formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure the view engine to render handlebars.
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// Home
app.get('/', (req, res)=>{
    res.render('home');
})

// Cadastro de Livros - createBook()
app.post('/books/insertbook', (req, res)=>{
    const title = req.body.title;
    const pagesQty = req.body.pagesqty;

    const query = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesQty}')`;

    connection.query(query, function(err){
        if(err){
            console.log(err);
            res.send('Erro ao cadastrar livro');
            return
        } else {
            res.redirect('/books');
        }
    })
})

// Recuperação de Livros - getBooks()
app.get('/books', (req, res)=>{
    const query = `SELECT * FROM books`;

    connection.query(query, function(err, data){
        if(err){
            console.log(err);
            res.send('Erro ao recuperar livros');
            return
        }
        const books = data;
        //console.log(books);
        res.render('books', {books});
    })
})

// Recuperação de Livro - getBook()
app.get('/books/:id', (req, res)=>{
    const id = req.params.id;
    const query = `SELECT * FROM books WHERE id = ${id}`;

    connection.query(query, function(err, data){
        if(err){
            console.log(err);
            res.send('Erro ao recuperar livro');
            return
        }
        const book = data[0];
        //console.log(book);
        res.render('book', {book});
    })
})

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
