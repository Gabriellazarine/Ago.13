const {listarBaralhos} = require('./Baralho/listarBaralhos');
const {adicionarBaralho} = require('./Baralho/adicionarBaralho');
const {deletarBaralho} = require('./Baralho/deletarBaralho');
const {atualizarBaralho} = require('./Baralho/atualizarBaralho');
const {listarFlashcard} = require('./Flashcard/listarFlashcard');
const {adicionarFlashcard} = require('./Flashcard/adicionarFlashcard');
const {deletarFlashcard} = require('./Flashcard/deletarFlashcards');
const {atualizarFlashcard} = require('./Flashcard/atualizarFlashcard');
const {buscarFlashcardsPorPergunta} = require('./Flashcard/buscarFlashcardsPorPergunta');
const {buscarFlashcardsPorBaralho} = require('./Flashcard/buscarFlashcardsPorBaralho');
const {findFlashcardIndexById} = require('./findFlashcardIndexById');

const prompt = require('prompt-sync')();

// EXIBE O MENU PRINCIPAL
function exibirMenu () {
    console.log(`
    === Menu Principal ===
        1. Flashcards
        2. Baralho
        3. Sair

`);

const opcao = prompt('Escolha uma opção: ');

switch(opcao) {
    case '1':
        exibirMenuFlashcards();
        break;
    case '2':
        exibirMenuBaralhos()
    case '3':
        console.log('Até mais!');
        process.exit()
        break;
    default:
        console.log('Opção inválida');
        exibirMenu();
        break;
}
}

//EXIBE O MENU DE BARALHOS
function exibirMenuBaralhos() {
    console.log(`
        1. Listar Baralho
        2. Adicionar Baralho
        3. Atualizar Baralho
        4. deletar Baralho
        5. Voltar ao menu principal
    `)

    const opcao = prompt('Escolha uma opção: ') 

    switch(opcao) {
        case '1': 
            listarBaralhos();
            exibirMenuBaralhos();
        case '2':
            const nomeBaralho = prompt('Digite o nome do Baralho: ');
            adicionarBaralho(nomeBaralho);
            exibirMenuBaralhos();
        case '3':
            listarBaralhos();
            const idAtualizarBaralho = parseInt(prompt('Insira o número do id a ser atualizado: '));
            const novoNomeBaralho = prompt('Insira o novo nome do Baralho: ');
            atualizarBaralho(idAtualizarBaralho, {nome:novoNomeBaralho});
            exibirMenuBaralhos();
        case '4':
            listarBaralhos();
            idBaralho = parseInt(prompt('Número do baralho a remover: '));
            deletarBaralho(idBaralho);
            exibirMenuBaralhos();
        case '5':
            exibirMenu();          
            break;
        default: 
            console.log('Opção inválida');
            exibirMenuBaralhos();
            break;
    }
}

//EXIBE O MENU DE fLASHCARDS
function exibirMenuFlashcards() {
    console.log(`
        1. Listar Flashcard
        2. Adicionar Flashcard
        3. Deletar Flashcard 
        4. Atualizar Flashcard
        5. Buscar Flashcards por Baralho
        6. Buscar Flashcards por pergunta 
        7. Voltar ao menu principal
    `);

const opcao = prompt('Escolha uma opção: ');

switch(opcao) {
    case '1':
        listarFlashcard();
        exibirMenuFlashcards();
        break;
    case '2':
        const pergunta = prompt('Insira uma pergunta: ');
        const resposta = prompt('Insira a resposta: ');
        const baralho = prompt('Insira o baralho: ');
        adicionarFlashcard(pergunta, resposta, baralho);
        exibirMenuFlashcards();
        break;
    case '3':
        listarFlashcard();
        id = prompt('Insira o número a remover: ');
        deletarFlashcard(id);
        exibirMenuFlashcards();
        break;
    case '4':
        listarFlashcards();
        const idAtualizarFlashcards = parseInt(prompt('Insira o número do id a ser atualizado: '));
        const novaPergunta = prompt('Insira a nova pergunta: ');
        const novaResposta = prompt('Insira a nova resposta: ');
        const novoBaralho = prompt('Insira o novo Baralho: ');
        atualizarFlashcards(idAtualizarFlashcards, {pergunta:novaPergunta, resposta:novaResposta, baralho:novoBaralho});
        exibirMenuFlashcards();
        break;
    case '5':
        const nomeBaralho = prompt('Digite o nome do baralho: ');
        buscarFlashcardsPorBaralho(nomeBaralho);
        exibirMenuFlashcards();
        break;
    case '6':
       const perguntaBusca = prompt('Digite a pergunta a ser buscada: ');
       buscarFlashcardsPorPergunta(perguntaBusca);
       exibirMenuFlashcards();
       break;
    case '7':
        exibirMenu();
        break;
    default:
        console.log('opção inválida');
        exibirMenuFlashcards();
        break;
}
};

exibirMenu();
