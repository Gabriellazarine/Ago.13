const data = require('./data');

function findFlashcardIndexById(id) {
  const { flashcards } = data;
  return flashcards.findIndex(flashcard => flashcard.id === id);
}

module.exports = findFlashcardIndexById;
