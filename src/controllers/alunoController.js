const Aluno = require('../models/AlunoModel');

exports.paginaEntrada = (req, res) => {
    console.log(req.url)
    res.render('entrada');
};
exports.paginaSaida = (req, res) => {
    res.render('saida');
};

exports.trataPost = async(req, res) => {
    if(req.url == '/alunos/entrada'){
        Aluno.registraEntrada(req.body);
    }else {
        Aluno.registraSaida(req.body);
    }
    res.render('salvo');
    return;
};