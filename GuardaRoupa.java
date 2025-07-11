package guardaRoupa;

public class GuardaRoupa {
    private String marca;
    private String cor;
    private int tamanho;
    private float valor;
    private boolean emprestado;
    private boolean limpo;

    public GuardaRoupa(String marca, String cor, int tamanho, float valor, boolean emprestado, boolean limpo) {
        this.marca = marca;
        this.cor = cor;
        this.tamanho = tamanho;
        this.valor = valor;
        this.emprestado = emprestado;
        this.limpo = limpo;
    }

    public boolean isEmprestado() {
        return emprestado;
    }

    public void setEmprestado(boolean emprestado) {
        this.emprestado = emprestado;
    }

    public boolean isLimpo() {
        return limpo;
    }

    public void setLimpo(boolean limpo) {
        this.limpo = limpo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public int getTamanho() {
        return tamanho;
    }

    public void setTamanho(int tamanho) {
        this.tamanho = tamanho;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public void emprestar(){
        if(this.emprestado == true){
            System.out.format("%s esta disponivel para uso! \n", getMarca(), this.emprestado);
    } else {
        System.out.format("%s nao esta disponivel! Foi emprestado para o coleguinha \n", getMarca(), this.emprestado);
        }
    }
    
    public void limpo(){
        if(this.limpo == true){
            System.out.format("Sua peca esta limpa e pode ser utilizada! \n");
        } else {
            System.out.format("A sua peca nao esta disponivel para ser utilizada, pois ela esta suja \n");
        }
    }
}
