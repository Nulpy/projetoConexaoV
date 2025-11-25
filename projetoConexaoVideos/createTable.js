import { sql } from './sql.js';

async function criarTabela(){
    try{
        await sql`
            CREATE TABLE IF NOT EXISTS videos(
                id UUID PRIMARY KEY,
                title TEXT NOT null,
                description TEXT NOT null,
                dration INTEGER NOT null

            );
        `;   
        console.log("tabela 'videos' criada com sucesso!");

    }catch(err){
    console.log("Erro ao criar a tabela 'videos' :",err);

    }finally{
        process.exit();

    }
}

criarTabela();