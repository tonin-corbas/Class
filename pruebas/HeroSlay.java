import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

// Enumerado para los tipos de cartas
enum CartaTipo {
    ATAQUE, CURA, ATURDIR
}

// Clase Carta
class Carta {
    private String nombre;
    private CartaTipo tipo;
    private int ataque;

    public Carta(String nombre, CartaTipo tipo, int ataque) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.ataque = ataque;
    }

    public void mostrarInfo() {
        System.out.println("Carta: " + nombre + " | Tipo: " + tipo + " | Ataque: " + ataque);
    }

    public CartaTipo getTipo() {
        return tipo;
    }

    public int getAtaque() {
        return ataque;
    }

    // Puedes añadir más métodos según sea necesario
}

// Clase Personaje
class Personaje {
    private String nombre;
    private int vida;
    private List<Carta> mazo;
    private boolean aturdido;

    public Personaje(String nombre, int vida, List<Carta> mazo) {
        this.nombre = nombre;
        this.vida = vida;
        this.mazo = mazo;
        this.aturdido = false;
    }

    public void mostrarInfo() {
        System.out.println("Personaje: " + nombre + " | Vida: " + vida);
    }

    public boolean estaAturdido() {
        return aturdido;
    }

    public void aplicarEfecto(Carta carta, Personaje objetivo) {
        switch (carta.getTipo()) {
            case ATAQUE:
                if (!aturdido) {
                    objetivo.recibirAtaque(carta.getAtaque());
                }
                break;
            case CURA:
                if (!aturdido) {
                    this.recibirCura(carta.getAtaque());
                }
                break;
            case ATURDIR:
                objetivo.serAturdido();
                break;
            // Puedes agregar más casos según sea necesario
        }
    }

    public void recibirAtaque(int cantidad) {
        vida -= cantidad;
        if (vida < 0) {
            vida = 0;
        }
    }

    public void recibirCura(int cantidad) {
        vida += cantidad;
    }

    public void serAturdido() {
        aturdido = true;
    }

    public void removerAturdimiento() {
        aturdido = false;
    }

    public Carta elegirCartaAleatoria() {
        Collections.shuffle(mazo);
        return mazo.get(0);
    }

    // Puedes agregar más métodos según sea necesario
}

public class JuegoCartas {
    public static void main(String[] args) {
        // Paso 1: Crear mínimo una carta de cada tipo
        Carta cartaAtaque = new Carta("Espada Afilada", CartaTipo.ATAQUE, 10);
        Carta cartaCura = new Carta("Poción Curativa", CartaTipo.CURA, 8);
        Carta cartaAturdir = new Carta("Aturdir", CartaTipo.ATURDIR, 0);

        // Paso 2: Construir 1 Mazo básico para los personajes
        List<Carta> mazoBasico = new ArrayList<>();
        mazoBasico.add(cartaAtaque);
        mazoBasico.add(cartaCura);
        mazoBasico.add(cartaAturdir);

        // Paso 3: Crear 2 Personajes
        Personaje heroe = new Personaje("Héroe", 30, new ArrayList<>(mazoBasico));
        Personaje villano = new Personaje("Villano", 30, new ArrayList<>(mazoBasico));

        // Paso 4: Mientras alguno de los dos personajes tenga vida, jugar RONDA
        while (heroe.vida > 0 && villano.vida > 0) {
            jugarRonda(heroe, villano);
        }

        // Paso 5: Mostrar el ganador de la batalla
        if (heroe.vida <= 0) {
            System.out.println("¡El Villano ha ganado!");
        } else {
            System.out.println("¡El Héroe ha ganado!");
        }
    }

    // Método para simular una ronda de juego
    private static void jugarRonda(Personaje jugador1, Personaje jugador2) {
        // Paso 1: Mostrar la información de ambos jugadores
        jugador1.mostrarInfo();
        jugador2.mostrarInfo();

        // Paso 2: Elegir aleatoriamente qué jugador jugará primero la ronda
        Random random = new Random();
        Personaje primerJugador = random.nextBoolean() ? jugador1 : jugador2;
        Personaje segundoJugador = (primerJugador == jugador1) ? jugador2 : jugador1;

        // Paso 3: Mostrar del Mazo del jugador 2 cartas aleatorias
        Carta cartaJugador2A = segundoJugador.elegirCartaAleatoria();
        Carta cartaJugador2B = segundoJugador.elegirCartaAleatoria();

        // Paso 4: El jugador en cuestión utilizará una de estas dos cartas
        Carta cartaElegida = primerJugador.elegirCartaAleatoria();

        // Paso 5: Se aplicará el efecto de la carta
        primerJugador.aplicarEfecto(cartaElegida, segundoJugador);

        // Paso 6: Si la carta no ha sido un ATURDIR, el siguiente jugador realizará los puntos 3, 4 y 5.
        if (cartaElegida.getTipo() != CartaTipo.ATURDIR) {
            segundoJugador.removerAturdimiento();

            // Repetir el proceso con los roles de jugadores invertidos
            // Nota: Aquí se puede agregar lógica adicional si se desea
            Carta cartaJugador1A = primerJugador.elegirCartaAleatoria();
            Carta cartaJugador1B = primerJugador.elegirCartaAleatoria();

            Carta cartaElegida2 = segundoJugador.elegirCartaAleatoria();
            segundoJugador.aplicarEfecto(cartaElegida2, primerJugador);
        }
    }
}
