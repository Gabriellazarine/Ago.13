const data = require('./data');

function buscarFlashcardsPorPergunta(pergunta) {
  const { flashcards } = data;
  const flashcardsComPergunta = flashcards.filter(flashcard => flashcard.pergunta === pergunta);
  if (flashcardsComPergunta.length === 0) {
    console.log('Nenhum flashcard encontrado com esta pergunta.');
    return;
  }
  flashcardsComPergunta.forEach((flashcard, index) => {
    console.log(`\nFlashcard ${index + 1}`);
    console.log(`- Pergunta: ${flashcard.pergunta}`);
    console.log(`- Resposta: ${flashcard.resposta}`);
    console.log(`- Baralho: ${flashcard.baralho}`);
  });
}

module.exports = {buscarFlashcardsPorPergunta};
