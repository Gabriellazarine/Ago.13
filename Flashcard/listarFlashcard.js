const data = require('../data')

function listarFlashcard() {
    const {flashCards} = data
    if(flashCards.length === 0) {
        console.log('Nenhum flashcard encontrado')
    } else {
    flashCards.forEach((flashCard, index) => {
        console.log(`\nFlashcard: ${index + 1}`)
        console.log(`\n-Pergunta: ${flashCard.pergunta}`)
        console.log(`\n-Resposta: ${flashCard.resposta}`)
        console.log(`\n-Baralho: ${flashCard.baralho}`)
        })
    }
}   


module.exports = {listarFlashcard}