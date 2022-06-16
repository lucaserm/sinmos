const Aluno = require('../models/AlunoModel');

exports.paginaEntrada = (req, res) => {
    res.render('entrada');
};
exports.paginaSaida = (req, res) => {
    res.render('saida');
};

exports.trataPost = async(req, res) => {
    if(req.url == '/alunos/entrada'){
        Aluno.registraEntrada(req.body);
    }else if(req.url == '/alunos/saida'){
        Aluno.registraSaida(req.body);
    }
    res.render('salvo');
    return;
};
