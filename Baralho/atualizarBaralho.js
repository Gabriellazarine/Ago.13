const data = require('../data')

function atualizarBaralho(id, novoNome) {
    const {decks} = data;
    const index = decks.findIndex(deck => deck.id === id)  
    if(index !== -1) {
      let jaExiste = decks.find(deck => deck.nome === decks.nome)
        if (jaExiste) {
            throw new Error('Já existe um baralho com esse nome')
       } else {
          decks[index] = {id, ... novoNome}
    }
}
}
module.exports = { atualizarBaralho }