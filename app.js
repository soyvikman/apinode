const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;
const morgan = require('morgan');
const conectarDB = require('./config/db');

//Conexión a base de datos
conectarDB();

//Sirviendo json
app.use(express.json())

//Usar Morgan como logger de errores
app.use(morgan('tiny'));

//Sirviendo mis rutas
app.use("/", require("./routes/principal"));


//Conexión a servidor
app.listen(port, ()=>{
    console.log(`API funcionando en http://localhost:${port}`)
})