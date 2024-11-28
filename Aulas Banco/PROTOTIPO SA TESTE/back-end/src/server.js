// Importando express, cors e pg
const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()

// Configurando pool para acesso ao banco de dados
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL / PGAdmin
    host: 'localhost',
    database: 'CadastroUser', // Nome da sua database no PostgreSQL / PGAdmin
    password: 'senai', // Substitua pela sua senha do PostgreSQL / PGAdmin
    port: 5432, // Porta padrão do PostgreSQL
})

// Habilitando CORS para as rotas
app.use(cors())
app.use(express.json())

// Rota para inserção de user no banco de dados
app.post('/Users', async (req, res) => {
    const { username, email, senha } = req.body

    try {
        // Query para inserção do user no banco de dados
        if (username != '' && email != '' && senha != '') {
            
            const result = await pool.query(
                'INSERT INTO users (username, email, senha) VALUES ($1, $2, $3) RETURNING *',
                [username, email, senha]
                )
                res.status(201).json(result.rows[0])
        }else{
            res.status(400).json({ error: 'Preencha todos os campos! :(' })
        }

    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Erro ao cadastrar usuário! :(' })
    }

})
// Rota para buscar todos os clientes
app.get('/Users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

// Listener para confirmação de servidor rodando
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000! :D')
})

// npm install axios    FRONT-END
// npm install express --save    BACK-END
// npm install --save-dev nodemon      BACK-END
