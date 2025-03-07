//criacao das rotas
const express = require('express');

const router = express.Router();

router.get('./src/routers/livros', (require, response)=>{
    response.json([
       {id:'1', title:'O senhor dos anéis', author:'J.R.R. Tolkien'},
       {id:'2', title:'1984', author:'George Orwell'},
    ]);
});


module.exports = router;

