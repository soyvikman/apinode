const mongoose = require('mongoose');
const config = require('config');

const conectarDB = async () => {
    try {
        await mongoose.connect(config.get("mongoDB"),{
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
                useFindAndModify:true
        },
            console.log("Conectado a la base de datos en MongoDB")
            )
    } catch (error){
        console.log(`Hubo un error al conectar a la DB: ${error}`);
    }
};

module.exports = conectarDB;
