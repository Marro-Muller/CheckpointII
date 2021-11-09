// Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré - definidos.

// 1 - Pipoca – 10 segundos(padrão);
// 2 - Macarrão – 8 segundos(padrão);
// 3 - Carne – 15 segundos(padrão);
// 4 - Feijão – 12 segundos(padrão);
// 5 - Brigadeiro – 8 segundos(padrão);

// - O usuário poderá alterar o tempo padrão, 
// aumentando ou diminuindo de acordo com sua vontade.
// Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

menu();

function menu() {
    console.log("1 - Pipoca - 10 segundos");
    console.log("2 - Macarrao - 8 segundos");
    console.log("3 - Carne - 15 segundos");
    console.log("4 - Feijao - 12 segundos");
    console.log("5 - Brigadeiro - 8 segundos");

    //input stackoverflow to microondas
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    readline.question('Digite o número do prato: ', (prato) => {
        readline.question('Digite o tempo do prato: ', (tempo) => {
            microondas(prato, tempo);
            readline.close();
        })
    })   
}
function microondas(prato, tempo) {
    switch (prato) {
        case '1':
            const tempoPipoca = 10;
            if (tempo >= tempoPipoca * 3) {
                console.log("kabumm");
            } else if (tempo >= tempoPipoca * 2) {
                console.log("Prato queimou");
            }
            if (tempo < tempoPipoca) {
                console.log("Tempo insuficiente");
            }
            if (tempo >= tempoPipoca && tempo < tempoPipoca * 2) {
                console.log("Prato pronto, bom apetite!!!");
            }
            
            break;
        case '2':
            const tempoMacarrao = 8;
            if (tempo >= tempoMacarrao * 3) {
                console.log("kabumm");
            } else if (tempo >= tempoMacarrao * 2) {
                console.log("Prato queimou");
            }
            if (tempo < tempoMacarrao) {
                console.log("Tempo insuficiente");
            }
            if (tempo >= tempoMacarrao && tempo < tempoMacarrao * 2) {
                console.log("Prato pronto, bom apetite!!!");
            }

            break;
        case '3':
            const tempoCarne = 15;
            if (tempo >= tempoCarne * 3) {
                console.log("kabumm");
            } else if (tempo >= tempoCarne * 2) {
                console.log("Prato queimou");
            }
            if (tempo < tempoCarne) {
                console.log("Tempo insuficiente");
            }
            if (tempo >= tempoCarne && tempo < tempoCarne * 2) {
                console.log("Prato pronto, bom apetite!!!");
            }

            break;
        case '4':
            const tempoFeijao = 12;
            if (tempo >= tempoFeijao * 3) {
                console.log("kabumm");
            } else if (tempo >= tempoFeijao * 2) {
                console.log("Prato queimou");
            }
            if (tempo < tempoFeijao) {
                console.log("Tempo insuficiente");
            }
            if (tempo >= tempoFeijao && tempo < tempoFeijao * 2) {
                console.log("Prato pronto, bom apetite!!!");
            }

            break;
        case '5':
            const tempoBrigadeiro = 8;
            if (tempo >= tempoBrigadeiro * 3) {
                console.log("kabumm");
            } else if (tempo >= tempoBrigadeiro * 2) {
                console.log("Prato queimou");
            }
            if (tempo < tempoBrigadeiro) {
                console.log("Tempo insuficiente");
            }
            if (tempo >= tempoBrigadeiro && tempo < tempoBrigadeiro * 2) {
                console.log("Prato pronto, bom apetite!!!");
            }

            break;
        default:
            console.log("Prato inexistente");
            break;
    }
}