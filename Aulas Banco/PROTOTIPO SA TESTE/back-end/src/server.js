const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    
    user: 'postgres',
    host: 'localhost',
    database: 'CadastroUser',
    password: 'senai',
    port: 5432,

}); 

app.use(cors());
app.use(express.json());
app.listen(3000, () => {

    console.log('Server Rodando na porta 3000');

});