function teste1(x,y) {
    return y - x
};
console.log (teste1 (10,40));

//Funções Simples

//1. Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function converterPolegada(pol) {
    return pol*2,5
}
console.log(converterPolegada(10))

//2. Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function converterURL(url) {
    return ("http://www." + url + ".com.br")
}
console.log(converterURL("youtube"))

// 3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function recebeString(frase) {
    return (frase + "!")
}
console.log(recebeString("Hello, World"))

// 4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function calculaIdade(idadeDoggo) {
    return (idadeDoggo * 7)
}
console.log(calculaIdade(3))


// 5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

// 6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
// *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.

// 7. Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.

// 8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
// Dica: Isso te ajudará a entender o que o operador typeof faz.

// 9. Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
