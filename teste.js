const { ehPalindromo } = require('./script.js');
console.log('Iniciando suíte de testes...');
let falhas = 0;
function testar(descricao, valorEsperado, valorRecebido) {
if (valorEsperado === valorRecebido) {
console.log(`✅ [PASSOU] ${descricao}`);
} else {
console.error(`❌ [FALHOU] ${descricao} | Esperado: ${valorEsperado}, Recebido:
${valorRecebido}`);
falhas++;
}
}
// Casos de Teste
testar('Deve retornar true para "arara"', true, ehPalindromo('arara'));
testar('Deve retornar true para "Ame a ema"', true, ehPalindromo('Ame a ema'));
testar('Deve retornar false para "gato"', false, ehPalindromo('gato'));
testar('Deve retornar false para uma string vazia', false, ehPalindromo(''));
testar('Deve retornar true para "Subi no onibus"', true, ehPalindromo('Subi no onibus'));
console.log('Testes finalizados.');
// Se houver falhas, termina o processo com um código de erro.
if (falhas > 0) {
process.exit(1);
}
