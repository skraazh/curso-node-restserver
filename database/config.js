const mongoose = require('mongoose');

const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Conectado a la DB');
    } catch (error) {
        console.log(error);
        throw new Error('ERROR EN LA DB');
    }
}
module.exports={
    dbConnection
}