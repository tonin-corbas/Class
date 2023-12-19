function cambio() {
    const elementos = document.getElementsByClassName("lista")
    for (let index = 0; index < elementos.length; index++) {
        const lista = elementos[index];
        lista.classList.add("lista_cambio");
    }

    const elementos2 = document.getElementsByClassName("lista2")
    for (let index = 0; index < elementos2.length; index++) {
        const lista = elementos2[index];
        lista.classList.add("lista_cambio2");
    }
}
function quita() {
    const elementos = document.getElementsByClassName("lista")
    for (let index = 0; index < elementos.length; index++) {
        const lista = elementos[index];
        lista.classList.remove("lista_cambio");
    }

    const elementos2 = document.getElementsByClassName("lista2")
    for (let index = 0; index < elementos2.length; index++) {
        const lista = elementos2[index];
        lista.classList.remove("lista_cambio2");
    }

}