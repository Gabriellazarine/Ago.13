const data = require('../data');


function listarBaralhos() {
    const {decks} = data;
    if(decks.length === 0) {
        console.log('Nenhum baralhos cadastrado');
    } else {
    decks.forEach((deck, index) => {
        console.log(`\nBaralho: ${index + 1}`);
        console.log(`-Nome: ${deck.nome}`);
    });
    };
};

module.exports = { listarBaralhos };