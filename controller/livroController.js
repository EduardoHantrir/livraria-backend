const express = require('express');

//Gerenciador de rotas
const router = express.Router();

//Rota de inserção de livro (POST)
router.post('/livro/inserir', (req, res)=>{
    res.send('Rota livro de inserção');
})

//Rota de seleção de autor (GET)
router.get('/livro/selecionar', (req, res)=>{
    res.send('Rota livro de seleção');
})

//Rota de alteração de livro (PUT)
router.put('/livro/alterar', (req, res)=>{
    res.send('Rota de livro de alteração');
})

//Rota de exclusão de livro (DELETE)
router.delete('/livro/excluir', (req, res)=>{
    res.send('Rota de livro de exclusão');
})

module.exports = router;