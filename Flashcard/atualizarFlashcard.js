const data = require('./data');

function atualizarFlashcard(id, novaPergunta, novaResposta, novoBaralho) {
  const { flashcards } = data;
  const index = flashcards.findIndex(flashcard => flashcard.id === id);
  if (index !== -1) {
    flashcards[index] = {
      id,
      pergunta: novaPergunta,
      resposta: novaResposta,
      baralho: novoBaralho
    };
    console.log('Flashcard atualizado com sucesso!');
    return flashcards[index];
  } else {
    console.log('Flashcard não encontrado.');
    return null;
  }
}

module.exports = {atualizarFlashcard};
