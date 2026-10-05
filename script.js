// Selecionando os elementos da tela
const gameInput = document.getElementById('gameInput');
const addBtn = document.getElementById('addBtn');
const gameList = document.getElementById('gameList');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');

// Busca a lista salva no computador ou cria uma vazia
let games = JSON.parse(localStorage.getItem('gamesBacklog')) || [];

// Função para salvar no LocalStorage
function saveGames() {
    localStorage.setItem('gamesBacklog', JSON.stringify(games));
}

// Função para desenhar a lista na tela
function renderGames() {
    gameList.innerHTML = ''; // Limpa a lista atual
    
    // Organiza: incompletos em cima, concluídos embaixo
    const sortedGames = [...games].sort((a, b) => a.completed - b.completed);
    
    let completed = 0;

    sortedGames.forEach(game => {
        if (game.completed) completed++;

        // Acha o índice original do jogo no array (necessário por causa do sort)
        const realIndex = games.findIndex(g => g.id === game.id);

        const li = document.createElement('li');
        if (game.completed) li.classList.add('completed');

        li.innerHTML = `
            <div class="game-info">
                <div class="checkbox" onclick="toggleGame(${realIndex})"></div>
                <span class="game-name">${game.name}</span>
            </div>
            <button class="delete-btn" onclick="deleteGame(${realIndex})">✖</button>
        `;
        
        gameList.appendChild(li);
    });

    // Atualiza os contadores
    totalCount.textContent = games.length;
    completedCount.textContent = completed;
}

// Função de adicionar jogo
function addGame() {
    const name = gameInput.value.trim();
    if (name !== '') {
        games.push({
            id: Date.now(), // ID único baseado no tempo
            name: name,
            completed: false
        });
        gameInput.value = ''; // Limpa a caixa de texto
        saveGames();
        renderGames();
    }
}

// Função de marcar/desmarcar como concluído
function toggleGame(index) {
    games[index].completed = !games[index].completed;
    saveGames();
    renderGames();
}

// Função de deletar
function deleteGame(index) {
    games.splice(index, 1);
    saveGames();
    renderGames();
}

// Eventos de clique e teclado
addBtn.addEventListener('click', addGame);
gameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addGame();
});

// Renderiza a lista assim que a página carrega
renderGames();