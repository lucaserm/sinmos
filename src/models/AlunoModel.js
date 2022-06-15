const client = require('../../server');

function Aluno(body){
    this.body = body;
}

Aluno.buscaAlunos = async () => {
    try{
        const alunos = await client.query("SELECT * FROM alunos");
        return alunos.rows;
    }catch(e){
        console.log(`Houve algum erro ${e}`);
    }
};

Aluno.registraEntrada = async (body) => {
    try{
        const time = await client.query("SELECT CURRENT_TIMESTAMP");
        await client.query("INSERT INTO alunos(ra, nome, entrada) VALUES($1,$2,$3)", [body.ra, body.aluno, time.rows[0].current_timestamp]);
        console.log('Aluno adicionado no Banco de Dados com sucesso.');
    }catch(e){
        console.log(`Houve algum erro ${e}`);
    }
}

Aluno.registraSaida = async (body) => {
    try{
        const time = await client.query("SELECT CURRENT_TIMESTAMP");
        await client.query("INSERT INTO alunos(ra, nome, saida) VALUES($1,$2,$3)", [body.ra, body.aluno, time.rows[0].current_timestamp]);
        console.log('Aluno adicionado no Banco de Dados com sucesso.');
    }catch(e){
        console.log(`Houve algum erro ${e}`);
    }
}

module.exports = Aluno;
