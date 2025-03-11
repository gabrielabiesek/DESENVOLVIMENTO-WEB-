

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

/*var opcao = prompt("Digite uma opção");
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

//var lista=[4,8,1,9,6]*/


/*1 - Crie um algoritmo que inicie uma conta de banco zerada,
armazenando o nome, número da conta e saldo do cliente. Em
seguida crie as funções depositar, sacar e verificar saldo. Como
regra, o cliente só pode sacar se tiver saldo suficiente na conta e
nenhum depósito pode ser maior que R$ 1000,00 por vez.*/

/*var conta_bancaria = 0;
var nomeConta =  prompt("Digite o nome do titular da conta.");
var numero_conta = prompt("Digite o número da sua conta.");


function depositar(){
    var valor = parseFloat(prompt("Qual valor você deseja depositar?"));


if(valor>1000){
    alert("Não é póssivel depositar valores acima de 1000,00 reais.")
}
else{
    conta_bancaria = conta_bancaria + valor;
    aler("Deposito feito com sucesso. O saldo atual é de: " + conta_bancaria );

}
}

 
function sacar(){
    var valor = prompt("Qual valor você deseja sacar?")

if(valor>conta_bancaria){
    alert("O saldo é insuficiente para sacar este valor! ")
}
else{
    alert("Saque realizado com sucesso! ")
    saldoConta = conta_bancaria - valor;
}
}



function verificarSaldo(){
    alert("O saldo da conta número " + numero_conta + conta_bancaria);
}

depositar();
//sacar();
//verificarSaldo();*/

  /*2	- Crie uma função que receba uma lista de valores e calcule a média aritmética sempre que um novo valor for adicionado no fim da lista.
Use a estrutura abaixo para receber a lista de números inicial.*/


/*var num = prompt("Digite uma lista de números separados por vígula.")
var lista = num.split(",");

function media(){
    var soma = 0;

    for(var i = 0; i < lista.length; i++){
      
        var soma = soma + parseFloat(lista[i]);
    }

    var mediaArit = soma / lista.length


alert(mediaArit);
 }
 

media();*/



/*3 - Faça um programa que recebe três números do usuário, e
identifica o maior através de uma função e o menor número
através de outra função.*/


var numUsuario1 = prompt("Digite o primeiro número de usuário.")
var numUsuario2 = prompt("Digite o segundo número de usuário.")
var numUsuario3 = prompt("Digite o terceiro número de usuário.")
 

function maior(){
if (numUsuario1 > numUsuario2 && numUsuario1 > numUsuario3){
    document.write(" O maior número de usuário é o " + numUsuario1 + " ,que pertence ao  primeiro número de usuário.");

}
else if (numUsuario2 > numUsuario1 && numUsuario2 > numUsuario3){
    document.write("O maior número de usuário é o " + numUsuario2 + " ,que pertence ao segundo número de usuário 2.");
}
else{
    document.write(" O maior número de usuário é o " + numUsuario3 + " ,que pertence ao  terceiro número de usuário 3.");
}
}

function menor(){
    if (numUsuario1 < numUsuario2 && numUsuario1 < numUsuario3){
        document.write(" O menor número de usuário é o " + numUsuario1 + " ,que pertence ao  primeiro número de usuário.");
    
    }
    else if (numUsuario2 < numUsuario1 && numUsuario2 < numUsuario3){
        document.write("O menor número de usuário é o " + numUsuario2 + " ,que pertence ao segundo número de usuário 2.");
    }
    else{
        document.write(" O menor número de usuário é o " + numUsuario3 + " ,que pertence ao  terceiro número de usuário 3.");
    }
    }

maior(); 

menor();
  