const express = require('express');

const app = express();
const port = 3000 // Variável de ambiente

const path = require('path');

const basePath = path.join(__dirname, 'templates');

app.get('/', (req, res)=> {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})