/**
* Função principal que verifica se um texto é um palíndromo.
* @param {string} texto O texto a ser verificado.
* @returns {boolean} Retorna true se for um palíndromo, false caso contrário.
*/
function ehPalindromo(texto) {
    if (!texto) return false;
    // Normaliza o texto: remove espaços, pontuação e acentos, e converte para minúsculas.
    const textoNormalizado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Inverte o texto normalizado e compara com o original.
    const textoInvertido = textoNormalizado.split('').reverse().join('');
    return textoNormalizado === textoInvertido;
    }
    /**
    * Função chamada pelo botão no HTML para interagir com o usuário.
    */
    function verificar() {
    const input = document.getElementById('input-texto');
    const resultadoEl = document.getElementById('resultado');
    const texto = input.value;
    if (ehPalindromo(texto)) {
    resultadoEl.textContent = `Sim, "${texto}" é um palíndromo!`;
    resultadoEl.className = 'sucesso';
    } else {
    resultadoEl.textContent = `Não, "${texto}" não é um palíndromo.`;
    resultadoEl.className = 'erro';
    }
    }
    // Exporta a função de lógica para que nosso script de teste possa usá-la.
    if (typeof module !== 'undefined') {
    module.exports = { ehPalindromo };
    }