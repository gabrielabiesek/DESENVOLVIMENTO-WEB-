

/*var x = prompt("Digite um valor");

    if (x % 2 == 0){
        document.write("É par. ");
    }
    else{
        document.write("É ímpar. ");
    }
    
    var divisores = 0;
for (var i = 0; i <= x; i++){
 if(x % i == 0){
    divisores++;
 } 
}
    if(divisores == 2){
    document.write("É número primo.");
}
    else{
    document.write("Não é número primo.")
}*/
/*var y; // Divisor
var contador = 0; //Conta quantos divisores tem

for (y=1;y<=4;y++){
    if( x  %  y == 0){
         contador++;
}}
    console.log("")  


if (x % y == 0){
    console.log("É primo. ")
}
else;
    console.log("O número não é primo. ")*/


   // console.log("A opção é inválida!")

var opcao = prompt("Digite uma opção");
var num1 = parseInt(prompt("Digite um valor"));
var num2 = parseInt(prompt("Digite outro valor"));
var resultado;
var x=1;

if (opcao == 0){   //Essa opção é soma
resultado = num1 + num2;
    document.write(resultado);
}

if (opcao == 1){   //Essa opção é subtração
resultado = num1 - num2;
    document.write(resultado);
}

if (opcao == 2){   //Essa opção é multiplicação
resultado = num1 * num2;
    document.write(resultado);
}

if (opcao == 3){   //Essa opção é divisão
resultado = num1 / num2;
    document.write(resultado);
}

if (opcao == 4){   //Essa opção é a potenciação
    resultado = num1;
    for (x < num2){
        resultado = resultado * num1;
        x++
    }

}
/*var num_sequencia = 13;

var num1 = 0;
var num2 = 1;
var resultado;

resultado = num1 + num2;
var i = 0;

while (i > num_sequencia){
    num1 = num2;
    num2 = resultado;
    resultado = num1 + num2;
    i++;
}
   
document.write(resultado);*/

/*Coloque um conjunto de números inteiros em ordem crescente. 
 
 	Entrada: vetor de números e tamanho da lista. 
 	Saída: vetor ordenado de maneira crescente. */

//var lista=[4,8,1,9,6]


