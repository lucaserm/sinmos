const express = require('express');
const route = express.Router();
const homesController = require('./src/controllers/homesController');
const alunoController = require('./src/controllers/alunoController'); 
const administracaoController = require('./src/controllers/administracaoController');

//Rota da home 
route.get('/', homesController.paginaInicial);

//Entrada ou Saída
route.get('/alunos/opcao', homesController.opcao);
//Inserção do aluno
route.get('/alunos/entrada', alunoController.paginaEntrada);
route.get('/alunos/saida', alunoController.paginaSaida);
route.post('/alunos/salvo', alunoController.trataPost);

//Rotas do administrador
//Login do Administrador
route.get('/administracao/login', administracaoController.login);
//Horários de todos os alunos cadastrados
route.get('/administracao/paginaalunos', administracaoController.paginaAlunos);

module.exports = route;