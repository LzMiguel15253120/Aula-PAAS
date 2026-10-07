// utils.test.js
const { sortGames, countCompletedGames } = require('./utils');

describe('Game List Utils', () => {
    
    // Criamos uma lista falsa para usar nos testes
    const mockGames = [
        { id: 1, name: 'Zelda Breath of the Wild', completed: true },
        { id: 2, name: 'Hollow Knight', completed: false },
        { id: 3, name: 'Elden Ring', completed: true }
    ];

    test('deve ordenar os jogos colocando os incompletos no topo', () => {
        const sorted = sortGames(mockGames);
        
        // O Hollow Knight (incompleto) deve ser o primeiro item [0] agora
        expect(sorted[0].name).toBe('Hollow Knight');
        expect(sorted[0].completed).toBe(false);
        
        // Os outros dois devem ir para o final
        expect(sorted[1].completed).toBe(true);
        expect(sorted[2].completed).toBe(true);
    });

    test('deve contar corretamente a quantidade de jogos concluídos', () => {
        const count = countCompletedGames(mockGames);
        
        // Na nossa lista mockGames, temos 2 jogos concluídos (Zelda e Elden Ring)
        expect(count).toBe(2);
    });

    test('deve retornar zero se a lista estiver vazia', () => {
        const count = countCompletedGames([]);
        expect(count).toBe(0);
    });
});