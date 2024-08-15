const data = require('../data');

function adicionarFlashcard(pergunta, resposta, baralho) {
    const {flashCards} = data;
    const flashCard = {
        id: flashCards.length +1,
        pergunta,
        resposta,
        baralho
    };
    flashCards.push(flashCard);
    console.log('Flashcard adicionado com sucesso!');
}

module.exports = {adicionarFlashcard};