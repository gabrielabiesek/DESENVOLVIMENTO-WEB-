
//Cria uma classe
/*class Produto{

    // Método construtor de objetos
    constructor(codigo, nome, preco, quantidade){
        this.cod = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quant = quantidade;
    
    }
    // Método vender
    vender(quantidade){
        this.quant -= quantidade;
        console.log("Venda realizada! Quantidade atual do produto: " + this.quant);
    
    }
    // Método para mudar o preço
    mudarpreco(valor){
        this.preco = valor;
        console.log("Troca de valor realizada! O novo preço é: " + this.preco);
        
    }
    // Método para adicionar ao estoque
    estoque(quantest){
        this.quant += quantest;
        console.log("A nova quantidade de produtos no estoque é: " + this.quant);
    }

    // Quantos produtos tem no estoque

    deposito(quantprod){
        this.quant = quantprod;
        console.log("A quantidade de produtos armazenados em estoque é: " + this.quant);
    }
    }
    
    
// Chama o método construtor para criar um objeto 
const laranja = new Produto(1, "laranja", 9.99, 150);
const maca = new Produto(2, "maça", 4.89, 40);

laranja.vender(15);
laranja.mudarpreco(3.59);
laranja.estoque(166);
maca.deposito(90);*/


//Exercício 1 - Crio a Classe guerreiro, que tem cono atributos HP, ataque o defesa. Mém disso,
//deve ser criado um método atacar, que calcula o valor de ataque do agressor, menos o valor da defesa 
//do defensor, tirando o valor restante do HP de quem está sendo atacado. Fazer os dois lutarem até que 
//algum dos personagens não tenha mais HP. Após isso, tente acrescentar uso de poçõos de regeneração, armas 
//que regeneren HP, ataques críticos...


//Cria uma classe
class Guerreiro{

    // Método construtor de objetos
    constructor(ataque, HP, defesa){
        this.atq = ataque;
        this.vida = HP;
        this.def = defesa;
    }
    atacar(jogador){
        jogador.vida = jogador.vida - (this.atq - jogador.def);
        console.log("A vida restante do seu jogador é: " + jogador.vida);
    }

}

// Chama o método construtor para criar um objeto 
const jogador = new Guerreiro(100, 100, 50);
const jogador2 = new Guerreiro (60, 100, 80);

while(jogador.vida > 0 && jogador2.vida > 0){
    

    var turno = parseInt(prompt("Escolha um número entre 1 e 0." ));
   
    if(turno == 0){
        console.log("O jogador 2 foi atacado!");
        jogador.atacar(jogador2);
        
    }
    
    else{
        turno = 1
        console.log("O jogador 1 foi atacado! ");
        jogador2.atacar(jogador);
    }

    

}

if(jogador.vida <= 0){
    console.log("O jogador 1 morreu!");
}
 
else{
    console.log("O jogador 2 morreu!");
}



