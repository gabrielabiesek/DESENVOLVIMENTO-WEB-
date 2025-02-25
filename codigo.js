/*console.log("oi");

var x = 4;

    if (x % 2 == 0){
        console.log("É par. ");
    }
    else;
        console.log("É ímpar. ");*/

/*if (x % x, x % 1){
    console.log("É número primo.");
}
else;
    console.log("Não é número primo."); */

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

/*var opcao = 3;
var num1 = 4;
var num2 = 2;
var resultado;

if (opcao == 0){   //Essa opção é soma
resultado = num1 + num2;
    console.log(resultado);
}

if (opcao == 1){   //Essa opção é subtração
resultado = num1 - num2;
    console.log(resultado);
}

if (opcao == 2){   //Essa opção é multiplicação
resultado = num1 * num2;
    console.log(resultado);
}

if (opcao == 3){   //Essa opção é divisão
resultado = num1 % num2;
    console.log(resultado);
}

if (opcao == 4){

}

else;
   // console.log("A opção é inválida!")*/

var num_sequencia = 13;

var num1 = 0;
var num2 = 1;
var resultado;

resultado = num1 + num2;
var i = 0;

while (i < num_sequencia){
    num1 = num2;
    num2 = resultado;
    resultado = num1 + num2;
    i++;
}
   
document.write(resultado);