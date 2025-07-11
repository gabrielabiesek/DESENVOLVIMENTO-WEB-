package guardaRoupa;

public class Camisetas extends GuardaRoupa{
    private String estampa;
    private String manga;
    private String tecido;
    private boolean dispoRoupeiro;

    public Camisetas(String marca, String cor, int tamanho, float valor, boolean emprestado, boolean limpo,
            String estampa, String manga, String tecido, boolean dispoRoupeiro) {
        super(marca, cor, tamanho, valor, emprestado, limpo);
        this.estampa = estampa;
        this.manga = manga;
        this.tecido = tecido;
        this.dispoRoupeiro = dispoRoupeiro;
    }

    public boolean isDispoRoupeiro() {
        return dispoRoupeiro;
    }

    public void setDispoRoupeiro(boolean dispoRoupeiro) {
        this.dispoRoupeiro = dispoRoupeiro;
    }

    public String getEstampa() {
        return estampa;
    }

    public void setEstampa(String estampa) {
        this.estampa = estampa;
    }

    public String getManga() {
        return manga;
    }

    public void setManga(String manga) {
        this.manga = manga;
    }

    public String getTecido() {
        return tecido;
    }

    public void setTecido(String tecido) {
        this.tecido = tecido;
    }

    public void disponivel(){
        if(dispoRoupeiro == true){
            System.out.format("A camiseta de maga %s da marca %s, cor %s, estampa $s \n do tamanho %d e do modelo %s esta disponivel no roupeiro! \n", getManga(), getMarca(), getCor(), getEstampa(), getTamanho());
        } else {
            System.out.format("A camiseta nao esta disponivel no roupeiro! \n");
        }
    }
    
}
