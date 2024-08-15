const data = require('../data');

function adicionarBaralho(nome) {
    const {decks} = data;
    const deck = {
        id: decks.length +1,
        nome
    };
    decks.push(deck);
    console.log('Baralho adicionado com sucesso!');
}

module.exports = { adicionarBaralho};