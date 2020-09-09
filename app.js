const express = require('express');
const app = express();
const port = 8000;

//ruta inicial
app.get('/', (req,res)=>{
    res.send('Hola')
})

app.listen(port, ()=>{
    console.log(`API funcionando en http://localhost:${port}`)
})