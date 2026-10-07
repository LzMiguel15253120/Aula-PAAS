// utils.js

/**
 * Retorna uma nova lista ordenando os jogos: 
 * Jogos não concluídos (false) vêm primeiro, concluídos (true) vão para o final.
 */
function sortGames(gamesArray) {
    // Usamos o spread operator [...] para não modificar o array original acidentalmente
    return [...gamesArray].sort((a, b) => a.completed - b.completed);
}

/**
 * Conta quantos jogos na lista estão marcados como concluídos
 */
function countCompletedGames(gamesArray) {
    return gamesArray.filter(game => game.completed === true).length;
}

// Exportando as funções para poderem ser importadas em outros arquivos
module.exports = {
    sortGames,
    countCompletedGames
};