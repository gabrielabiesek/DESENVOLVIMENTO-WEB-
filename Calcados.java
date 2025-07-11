package guardaRoupa;

public class Calcados extends GuardaRoupa{
    private String modelo;
    private boolean disponivel;

    public Calcados(String marca, String cor, int tamanho, float valor, boolean emprestado, boolean limpo,
            String modelo, boolean disponivel) {
        super(marca, cor, tamanho, valor, emprestado, limpo);
        this.modelo = modelo;
        this.disponivel = disponivel;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public void disponivel(){
        if(disponivel == true){
            System.out.format("O calcado da marca %s, cor %s, do tamanho %d, do modelo %s, \n com o valor de %f esta disponivel na loja em que voce procurou! \n", getMarca(), getCor(), getTamanho(), getModelo(), getValor());
        } else {
            System.out.format("O calcado com as informacoes que voce adicionou nao esta disponivel na loja em que voce procurou! \n");
        }
    }

}
