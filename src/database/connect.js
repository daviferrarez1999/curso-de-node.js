const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.d8gb3.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJS`,   
    )
    .then(console.log("Conexão ao banco de dados criada com sucesso!"))
    .catch(error => {
        console.log("Ocorreu um erro ao realizar a conexão: ", error)
    });
};

module.exports = connectToDatabase;
