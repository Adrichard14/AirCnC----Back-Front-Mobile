const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb://adrian:adrian@oministack-shard-00-00-jir1a.mongodb.net:27017,oministack-shard-00-01-jir1a.mongodb.net:27017,oministack-shard-00-02-jir1a.mongodb.net:27017/test?ssl=true&replicaSet=Oministack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});


//GET, POST, PUT, DELETE


// req.query.idade = Acessar a idade

//re.params.id = Acessar rout params (Para edição e delete)
//req.body = Acessar o corpo da requisição ( Criação e edição de registro)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '../', 'uploads')));
app.use(routes);


app.listen(3333);