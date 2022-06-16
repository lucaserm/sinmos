const Aluno = require('../models/AlunoModel');

exports.login = (req, res) => {
    res.render('administrador');
};

exports.paginaAlunos = async(req, res) => {
    if(req.body.nome_acesso !== 'root' && req.body.senha !== '123456'){
        res.render('index');
    }else{
        const alunos = await Aluno.buscaAlunos();
        res.render('horario', { alunos } );
    }
};
