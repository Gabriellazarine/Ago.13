const data = require('./data');

function buscarFlashcardsPorBaralho(baralho) {
  const { flashcards } = data;
  const flashcardsDoBaralho = flashcards.filter(flashcard => flashcard.baralho === baralho);
  if (flashcardsDoBaralho.length === 0) {
    console.log('Nenhum flashcard encontrado para este baralho.');
    return;
  }
  flashcardsDoBaralho.forEach((flashcard, index) => {
    console.log(`\nFlashcard ${index + 1}`);
    console.log(`- Pergunta: ${flashcard.pergunta}`);
    console.log(`- Resposta: ${flashcard.resposta}`);
  });
}

module.exports = {buscarFlashcardsPorBaralho};
