package cell;

public class Celular {
    private String marca;
    private String modelo;
    private float tamTela;
    private String sisOperacional;
    private boolean ligado;

    public Celular(String marca, String modelo, float tamTela, String sisOperacional, boolean ligado) {
        this.marca = marca;
        this.modelo = modelo;
        this.tamTela = tamTela;
        this.sisOperacional = sisOperacional;
        this.ligado = ligado;
    }

    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public float getTamTela() {
        return tamTela;
    }
    public void setTamTela(float tamTela) {
        this.tamTela = tamTela;
    }
    public String getSisOperacional() {
        return sisOperacional;
    }
    public void setSisOperacional(String sisOperacional) {
        this.sisOperacional = sisOperacional;
    }
    public boolean isLigado() {
        return ligado;
    }
    public void setLigado(boolean ligado) {
        this.ligado = ligado;
    }

    public void ligar(){
        if(this.ligado == false);{
            this.ligado = true;
            System.out.format("Seu celular do modelo %s foi desligado! \n", getModelo());
        }
    }

    public void desligar(){
        if(this.ligado == true){
            this.ligado = false;
            System.out.format("Seu celular do modelo %s esta ligado! \n", getModelo());
        }
    }

}
