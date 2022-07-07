const express = require('express');
const app = express();
const port = 3000 // Variável de ambiente
const path = require('path');
const basePath = path.join(__dirname, 'templates');

//Ler o body da requisição
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/users/add', (req, res)=> {
    res.sendFile(`${basePath}/useform.html`);
})

app.post('/users/save', (req, res)=> {
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;

    console.log(`Nome: ${name} - Idade: ${age} anos`);
    res.sendFile(`${basePath}/useform.html`);

})

app.get('/users/:id', (req, res)=> {
    const id = req.params.id;
    console.log(`Estamos buscando pelo usuário: ${id}`);
    res.sendFile(`${basePath}/users.html`);
})

app.get('/', (req, res)=> {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})