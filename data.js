let decks = [
    {
        id: 1,
        nome: "Matematica"
    },

    {
        id: 2,
        nome: "Quimica"
    }
]


let flashCards = [
    {
        id: 1,
        pergunta: "Quanto é 12+13?",
        resposta: "25",
        baralho: "Matematica"
    },

    {
        id: 2,
        pergunta: "Quanto é 40/1,5",
        resposta: "26,66",
        baralho: "Matematica"
    },

    {
        id: 3,
        pergunta: "forma molecular da água",
        resposta: "H2O",
        baralho: "Quimica"
    },

    {
        id: 4,
        pergunta: "Forma molecular do trinitrotolueno",
        resposta: "C7H5N3O6",
        baralho: "Quimica"
    }
]

module.exports = {
    flashCards,
    decks
}