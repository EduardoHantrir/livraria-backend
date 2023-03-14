/*Import de pacote express*/
const { urlencoded } = require('express');
const express = require('express')

/*Instancia executavel do express*/
const app = express ()

/*Criação do servidor HTTP
Parametros
1- Porta lógica (O 3000 é a portas padrão para maquina local, somente uma aplicação por porta)
2- Callback: parametro de uma função,possivel uma função anonima, chamada por outra, sendo executada direto, sem necessidade de um chamado direto.
3- arrowfunction, um parametro anonimo usado com "()=>".

Parametros são dados externos usados para alterar o seu comportamento em tempo de execução

Habilita a aplicação a manipular dados .JSON*/
app.use(express.json());

//Habilita a aplicação a manipular dados de um corpo de dados
app.use(express.urlencoded({extended:true}));


//importação de rotas
const categoriaController = require('./controller/categoriaController');
app.use('/', categoriaController);

const autorController = require('./controller/autorController');
app.use('/', autorController);

const livroController = require('./controller/livroController');
app.use('/', livroController);

/*
Teste de Rota HTTP GET, requer dois parametros
1 - Nome da rota
2 - CallBack que executa a ação da rota


app.get('/testeGET', (req, res)=>{
    res.send('rota de teste de GET!');
    console.log("Pegou!");
});
app.post('/testePOST', (req, res)=>{
    res.send("resposta para a rota post");
    console.log("Colocou");
})
app.put('/testePUT', (req, res)=>{
    res.send("resposta para a rota put");
    console.log("Editou");
})
app.delete('/testeDELETE', (req, res)=>{
    res.send("resposta para a rota delete");
    console.log("Deletou!");
})


M.D.V. = Model View Controller*/

app.listen(3000, ()=>{
    console.log('Servidor rodando na "http://localhost:3000"');
});
//Para executar o codigo usar no terminal