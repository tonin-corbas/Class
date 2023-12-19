document.getElementById("traductor").addEventListener("click", traducir)
document.getElementById("colors").addEventListener("mouseenter", Color);
document.getElementById("colors").addEventListener("mouseleave", Quitar_Color);

const diccionario = {
    'tareas': ['Tasks', 'Índice de tareas'],
    'inicio': ['Home', 'Inicio'],
    'intro': ['Introduction', 'Introducción'],
    'catalogo': ['Catalog', 'Catalogo de juegos'],
    'noti': ['News', 'Noticias'],
    'contact': ['Contact', 'Contacto'],
    'Juego de estilo Soulsborne': ['SoulsLike', 'Juego de estilo Soulsborne'],
    'precio': ['Price : $', 'Precio: €'],
    'leer': ['Leran more and buy', 'Leer más y comprar'],
    'mundo abierto': ['Open world game', 'Juego de mundo abierto'],
    'RPG': ['Traditional RPG game', 'Videojuego de tipo RPG tradicional.'],
    'souls': ['New Souls of FromSoftware', 'El nuevo souls de FromSoftware'],
    'accion': ['Aventure-action game', 'Juego de tipo acción-aventura.'],
    'rol': ['Action and RPG game', 'Juego de rol de acción.'],
    'FPS': ['First Person Shooter game', 'Juego FPS(First Person Shooter)'],
    'colec': ['Compilation of games of the Metal Gear  Saga', 'Recolección de juegos de la saga Metal Gear.'],
    'footer': ['© Web page with articles. Reserved Rights', '© Página web con artículos. Derechos reservados'],
    'trad': ['Translate', 'Traducir'],
    'col': ['Change color', 'Cambiar color'],
    'tienda': ['Your trusted video game store', 'Tu tienda de videojuegos de confianza'],
    'menu': ['Navigation menu', 'Menú de navegación']

}

var index = 1;

function traducir() {
    index = (index + 1) % diccionario['tareas'].length;
    applyTranslations();
}

function applyTranslations() {
    var elements = document.querySelectorAll('[data-translate]');
    elements.forEach(function (element) {
        var key = element.getAttribute('data-translate');
        element.textContent = diccionario[key][index];
    });
}

function Color() {
    const elementos = document.getElementsByClassName("element"); // esto devuelve un array
    console.log(elementos);
    for (let index = 0; index < elementos.length; index++) {
        const element = elementos[index];
        element.style.color = "darkblue"
    }
}

function Quitar_Color() {
    const elementos = document.getElementsByClassName("element");
    for (let index = 0; index < elementos.length; index++) {
        const element = elementos[index];
        element.style.color = "black"
    }
}