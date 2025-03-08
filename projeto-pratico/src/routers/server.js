const express = require('express');

const livrosRouter = require('./livros');

const app = express();
app.use('/livros', livrosRouter);
app.listen(3000,()=>{
    console.log('servidor running in port 3000');
});