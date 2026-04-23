const prompt = require("prompt-sync")();

async function consultarNome() {
    try {
        let pessoa= prompt("Digite o seu nome: ");
        pessoa = pessoa.trim();
         let pais= prompt("Digite o seu país (apenas siglas - BR, US): ");
        pais = pais.trim();

        // URL com base nos parametros do usuário (pessoa e pais = input)
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

        // Listagem da informações geradas pela API 
        // Contagem - É o número de "amostras" que a API fez para chegar nesse resultado. Sendo assim, ela analisou um tanto de pessoas para chegar no resultado final e, por cima dessa analise, ela faz uma média com as idades e imprime uma estimativa
        // Nome - é o nome que você digitou 
        // Idade - vai ser a idade que a API especulou que você tem 
        // País - vai ser o país que você digitou 
        // Do . para trás está em inglês por que a API é gringa
        console.log(" ⋆˚꩜｡ Informações! ");
        console.log("Contagem: ", dados.count);
        console.log("Nome: ", dados.name);
        console.log("Idade: ", dados.age);
        console.log("País: ", dados.country_id);
    } catch(erro) {
        // Mensagem de erro
        console.log("Erro ao acessar a API: ");
        console.log("erro.message");
    };
}
consultarNome();