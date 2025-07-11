import guardaRoupa.*;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("!!!!!!!!!!");

        Camisetas camiseta1 = new Camisetas("Adidas", "Preta", 36, 100, false, false, "lisa", "true", "poliester", false);
        Calcados calcados1 = new Calcados("Puma", "Branco", 37, 300, false, true, "Esportivo", true);

        camiseta1.disponivel();
        calcados1.disponivel();
        camiseta1.emprestar();
        calcados1.emprestar();
        camiseta1.limpo();
        calcados1.limpo();

    }
}

