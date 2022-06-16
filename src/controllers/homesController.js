const Aluno = require('../models/AlunoModel');

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.opcao = (req, res) => {
    res.render('opcao');
};

exports.trataPost = (req, res) => {
    res.send(req.body);    
    Aluno.registra(req.body);
    return;
};
