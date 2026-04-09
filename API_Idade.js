const prompt = require("prompt-sync")();

async function consultarNome() {
    try {
        let pessoa= prompt("Digite o seu nome: ");
        pessoa = pessoa.trim();
         let pais= prompt("Digite o seu país (apenas siglas - BR, US): ");
        pais = pais.trim();

        const url = `https://api.agify.io?name=${pessoa}&country_id=${pais}`;
        const resposta = await fetch(url);
        if (!resposta.ok) {
            console.log("Erro! Tente novamente.")
            return;
        }
        
        const dados = await resposta.json();
        if(dados.erro) {
            console.log("Erro no nome! Tente novamente.");
            return;
        }

        console.log(" ⋆˚꩜｡ Informações! ");
        console.log("Contagem: ", dados.count);
        console.log("Nome: ", dados.name);
        console.log("Idade: ", dados.age);
        console.log("País: ", dados.country_id);
    } catch(erro) {
        console.log("Erro ao acessar a API: ");
        console.log("erro.message");
    };
}
consultarNome();