// Exercicio 2
// Desenvolva uma função chamada média e calcule o valor da média aritmética de uma lista de números. 

/*var num = prompt("Digite uma lista de números.")
var lista = num.split(",");

function media(){
    var soma = 0
    
    for(var i = 0; i < lista.length; i++){
      
        var soma = soma + parseFloat(lista[i]);
    }

    var mediaArit = soma / lista.length


alert(mediaArit);
 }
 

media();*/

// Exercicio 8
// Faça um programa que receba 3 palavras e verifique qual delas é a quais são as maiores e as menores ou ainda se todas tem o mesmo tamanho. 

/*var palavra1 = prompt("Digite a primeira palavra: ");
var palavra2 = prompt("Digite a segunda palavra: ");
var palavra3 = prompt("Digite a terceira palavra: ");

function maior(){
    if(palavra1.length > palavra2.length && palavra1.length > palavra3.length){
        console.log("A maior palavra do usuário é a " + palavra1 + " que pertence a primeira palavra que o usuário digitou.");
    }

    else if(palavra2.length > palavra1.length && palavra2.length > palavra3.length){
        console.log("A maior palavra do usuário é a " + palavra2 + " que pertence a segunda palavra que o usuário digitou.");
    }

    else if(palavra3.length > palavra1.length && palavra3.length > palavra2.length){
        console.log("A maior palavra do usuário é a " + palavra3 + " que pertence a terceira palavra que o usuário digitou.");
    }

    else{
        comparacao();
    }


}

function menor(){
    if(palavra1.length < palavra2.length && palavra1.length < palavra3.length){
        console.log("A menor palavra do usuário é a " + palavra1 + " que pertence a primeira palavra que o usuário digitou.");
    }

    else if(palavra2.length < palavra1.length && palavra2.length < palavra3.length){
        console.log("A menor palavra do usuário é a " + palavra2 + " que pertence a segunda palavra que o usuário digitou.");
    }

    else if(palavra3.length < palavra1.length && palavra3.length < palavra2.length){
        console.log("A menor palavra do usuário é a " + palavra3 + " que pertence a terceira palavra que o usuário digitou.");
    }

    else{
        comparacao();
    }
}

function comparacao(){
    if(palavra1.length == palavra2.length && palavra1.length == palavra3.length){
        console.log("As palavras tem o mesmo tamanho.");
    }

    else{
        console.log("Pelo menos uma das palavras não possuem o mesmo tamanho.");
    }
}

maior();
menor();*/

// Exercicio 1
// Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual número ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo: 
// Tabuada de 5: 
// 5 X 1 = 5 
// 5 X 2 = 10 

/*num = parseInt(prompt("digite um número para ver a tabuada: "))
console.log("Tabuada de " + num)

function tabuada(){
    for(var i = 1; i <= 10; i++){
        resultado = i * num
        console.log(num + "X" + i + "=" + resultado)  
    }
}

tabuada();*/

// Exercicio 3
// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário.
// Ex.: 5!=5.4.3.2.1=120. A saída de ver ser conforme o exemplo abaixo: O fatorial de 5 é: 120 

/*var num = parseInt(prompt("Entre com um número inteiro: "));

function fatorial(){
    let num = 1
    for(let i = numero; i > 1; i--){
        resultado = i * num * i
        console.log(resultado) 
}
}
fatorial();*/




/*function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=nome; expires= Tue, 01 Jan 2115 12:00:00 UTC 
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");
    if(username != ""){
        alert("Bem vindo novamente " + username);
    }else{
        username =  prompt("Digite seu nome:");
        if (username != "" && username != null){
            criarCookie("nomeUsuario", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
}

verificarCookie();*/

//Faça uma aplicação com login e senha onde o usuário pode se manter logado usando cookies.
//O usuário deve poder cadastrar novo usuário e senha e também alterar a senha do seu usuário.
//A aplicação deve também ter uma opção sair, que obriga o usuário a logar novamente na pró-
//xima vez que utilizar a aplicação.


/*function criarCookie(nome, senha, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + senha + "=" + valor + "; " + dtExpira;
}
function lerCookie(nome, senha){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var vsenha = senha + "=";
    //vsenha -> senhaUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");
    var usersenha=parseFloat(lerCookie("senhaUsuario"));
    if(username != ""){
        alert("Bem vindo novamente " + username);
    }else{
        username =  prompt("Digite seu nome:");
        if (username != "" && username != null){
            criarCookie("nomeUsuario", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
    if(usersenha != ""){
        alert("Bem vindo novamente " + usersenha);
    }else{
        usersenha =  parseFloat(prompt("Digite sua senha:"));
        if (usersenha != "" && usersenha != null){
            criarCookie("senhaUsuario", usersenha, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
    
}

criarCookie();
lerCookie();
verificarCookie();*/

function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=nome; expires= Tue, 01 Jan 2115 12:00:00 UTC 
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");

  
    if(username != ""){
        alert("Bem vindo novamente " + username);

    }else{
        for(var x = 0; x != listalogin; i++){
        var login =  prompt("Digite seu nome:");
        var senha = prompt("Digite sua senha:");
        for(var i = 0; i < listalogin.length; i++){
            if(login == listalogin[i] && senha == listasenha[i]){
                criarCookie("nomeUsuario", login, " Tue, 01 Jan 2115 12:00:00 UTC ");
            }
        }
        {
            criarCookie("nomeUsuario", login, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
        if (login != "" && login != null){
            criarCookie("nomeUsuario", login, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
        for(login != listalogin && senha != listasenha){
            alert("Usuário ou senha inválidos!");
        }
    }
    }
}

var listalogin = ["Gabriela", "Thaila"];
var listasenha = ["345", "897"];
verificarCookie();