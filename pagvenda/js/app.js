function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {}

    if(strDados){
        objDados = JSON.parse (strDados);
    } 
    else {
        objDados = { 
            
            jogos: [{ }],
            campeonatos: [ { id: 1, camp: 'Libertadores'}, {id: 2, camp: 'Copa do Brasil'}, { id: 3, camp: 'Brasileirão'}, { id: 4, camp: 'Campeonato Mineiro'}, { id: 5, camp: 'Série B'}]            
        
        }
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem('db', JSON.stringify(dados))
}

function incluirJogos () {
    // Ler o histórico de ingressos vendidos do localStorage
    let objDados = leDados();

    // Incluir um novo jogo
    let strCamp = document.getElementById ('campoCampeonato').value;
    let strJogo = document.getElementById ('campoJogos').value;
    let strPreco = document.getElementById ('campoPreco').value;
    let strObservacoes = document.getElementById ('campoObs').value;
    let novoJogo = {
        campeonato: strCamp,
        jogo: strJogo,
        preco: strPreco,
        observacoes: strObservacoes
    };

    objDados.jogos.push (novoJogo);

    //Salvar os dados no localStorage

    salvaDados (objDados);

    // Aviso
    alert ('Colocado à venda com sucesso!')

}

function imprimeDados () {
    let tela = document.getElementById('carregaHistorico');
    let strHtml = '';
    let objDados = leDados ();
    
    for(i = 0; i < objDados.jogos.length; i++){
        strHtml += `<p>${objDados.jogos[i].campeonato} - ${objDados.jogos[i].jogo} - ${objDados.jogos[i].preco} - ${objDados.jogos[i].observacoes}</p>` 
    }

    tela.innerHTML = strHtml;
}

//Configurar botões

document.getElementById('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById('btnIncluirAVenda').addEventListener ('click', incluirJogos);
