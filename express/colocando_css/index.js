const express = require('express');
const app = express();
const port = 3000
const path = require('path');
const usersRouter = require('./users');
const basePath = path.join(__dirname, 'templates');

//Ler o body da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arquivos Estáticos
app.use(express.static('public'));

app.use('/users', usersRouter);

app.get('/', (req, res)=> {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})