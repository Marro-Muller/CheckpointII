// Com este exercício, vamos construir um if simples. Declare uma variável com o nome status. Atribua a ela um valor booleano: (true ou false). Em seguida, faça um if que avalie o valor contido nesta variável. Se o valor armazenado for true, imprima a seguinte mensagem no console: O valor é true - verdadeiro. Caso contrário, imprima a mensagem: O valor é false - falso.
let status = true;

if (status = true){
    console.log("O valor é true (verdadeiro)");
}
else {
    console.log("O valor é false (falso)");
}

// Crie uma variável chamada linguagem, que terá uma string atribuída a ela. Em seguida, construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript", ela deve imprimir no console, o texto: "Estou aprendendo". Contudo, caso a variável esteja armazenando qualquer outra linguagem, imprima "Aprenderei mais tarde".

let linguagem = "PHP";

if (linguagem == "javascript"){
    console.log("Estou aprendendo");
}
else {
    console.log("Aprenderei mais tarde");
}

// Exercício “Pode Subir”
// Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.
// 1) Crie uma função podeSubir() que receba dois parâmetros:
// - altura da pessoa;
// - se está acompanhada.

function podeSubir(altura, acompanhada) {
    if (altura > 1.4 && altura < 2){
        return true;
    }
        else if (altura < 1.4 && acompanhada == true){
            return true;
        }
        else if (altura < 1.2)
        return false;
        }