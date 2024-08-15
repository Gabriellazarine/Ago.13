const data = require('../data');

function deletarBaralho(id) {
    const {decks} = data;
    const index = decks.findIndex(deck => deck.id === id)  
    if (index !== -1) {
        decks.splice(index, 1)
        console.log('Baralho deletado')
     } else {
         console.log('Não encontrado')
     }
}

module.exports = { deletarBaralho };