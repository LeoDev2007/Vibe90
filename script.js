const games = [
  {
    id: 1,
    Nome: "Sonic The Hedgehog",
    Descricao: `Sonic the Hedgehog, lançado pela Sega em 1991 para o Sega Genesis, é um icônico jogo de plataforma que apresenta Sonic, um ouriço azul com super velocidade, em sua missão para derrotar o maligno Dr. Robotnik. 
    O jogo é conhecido por seu foco na velocidade e design inovador de níveis, oferecendo uma jogabilidade dinâmica em ambientes coloridos e cheios de desafios. 
    A mecânica de coleta de anéis e as batalhas contra chefes adicionam profundidade ao jogo, que rapidamente se tornou um clássico e ajudou a estabelecer a Sega como uma importante rival da Nintendo na era dos consoles de 16 bits. 
    O sucesso do jogo deu início a uma duradoura franquia que se expandiu para jogos, animações e quadrinhos.`,
    AnoLancamento: 1991,
    Plataforma: "Sega Genesis",
    imageGame: 'img/Sonic.jpg'
  },
  {
    id: 2,
    Nome: "Mortal Kombat",
    Descricao: `Mortal Kombat 1 para arcades e consoles se destacou por sua violência gráfica e movimentos especiais, 
    introduzindo o icônico sistema de fatalities e estabelecendo um legado duradouro em jogos de luta.`,
    AnoLancamento: 1992,
    Plataforma: "Arcade",
    imageGame: 'img/MK1992.jpg'
  },
  {
    id: 3,
    Nome: "Super Mario 64",
    Descricao: `
    Super Mario 64 (1996) para o Nintendo 64 revolucionou os jogos 3D com suas mecânicas de plataforma em um ambiente aberto, 
    onde Mario explora castelos e mundos diversos para resgatar a Princesa Peach.`,
    AnoLancamento: 1996,
    Plataforma: "Nintendo 64",
    imageGame: 'img/64.jpg'
  },
  {
    id: 4,
    Nome: "The Legend Of Zelda: Ocarina Of Time",
    Descricao: `The Legend of Zelda: Ocarina of Time (1998) para o Nintendo 64 é amplamente aclamado por seu mundo aberto inovador e narrativa envolvente, 
    onde Link viaja no tempo para salvar Hyrule de Ganondorf.`,
    AnoLancamento: 1998,
    Plataforma: "Arcade",
    imageGame: 'img/OcarinaOfTime.jpg'
  },
  {
    id: 5,
    Nome: "Doom",
    Descricao: `Doom 1 (1993) popularizou o gênero de tiro em primeira pessoa com sua 
    jogabilidade intensa e gráficos em 3D, colocando os jogadores na pele de um fuzileiro 
    espacial que enfrenta hordas de demônios em bases infernais.`,
    AnoLancamento: 1993,
    Plataforma: "PC (MS-DOS)",
    imageGame: 'img/Doom_cover_art.jpg'
  },
];

const getParam = (param) =>{
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const displayGames = (gameId)=>{
    const game = games.find(g => g.id === parseInt(gameId));
    const gameImage = document.getElementById('game-image')
    const gameText = document.querySelector('.game-text')

    if (game){
        gameImage.innerHTML = `
         <img src="${game.imageGame}">
        `;
    
        gameText.innerHTML = `
         <h1>${game.Nome}</h1>
         <p>${game.Descricao}</p>
         <p>Ano de Lançamento: ${game.AnoLancamento}</p>
         <p>Plataforma: ${game.Plataforma}</p>
         <br />
         <br />
         <a href="index.html">Voltar a página inicial</a>
        `;
    } else{
        gameImage.innerHTML = `
            <h1>Game não encontrado</h1>
            <p>O game procurado não existe</p>
        `;

        gameText.innerHTML = '';
    }
    
}

window.onload = function() {
    const gameId = getParam('id');
    if (gameId) {
        displayGames(gameId);
    } else {
        document.getElementById('game-image').innerHTML = `
            <h1>Produto não especificado</h1>
            <p>Por favor, selecione um produto da lista.</p>
        `;
        document.querySelector('.game-text').innerHTML = '';
    }
};

