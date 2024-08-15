const data = require('../data');

function deletarFlashcard(id) {
    const {flashCards} = data;
    const index = flashCards.findIndex(flashCard => flashCard.id === id)  
    if (index !== -1) {
       flashCards.splice(index, 1)
        console.log('Falshcard deletado')
     } else {
         console.log('Não encontrado')
     }
}

module.exports = { deletarFlashcard };