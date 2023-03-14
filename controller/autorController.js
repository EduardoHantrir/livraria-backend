const express = require('express');

//Gerenciador de rotas
const router = express.Router();

//Rota de inserção de autor (POST)
router.post('/autor/inserir', (req, res)=>{
    res.send('Rota autor de inserção');
})

//Rota de seleção de autor (GET)
router.get('/autor/selecionar', (req, res)=>{
    res.send('Rota autor de seleção');
})

//Rota de alteração de autor (PUT)
router.put('/autor/alterar', (req, res)=>{
    res.send('Rota   autor de alteração');
})

//Rota de exclusão de autor (DELETE)
router.delete('/autor/excluir', (req, res)=>{
    res.send('Rota autor de exclusão');
})

module.exports = router;