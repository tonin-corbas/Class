function Cambio() {
    let par = document.getElementsByTagName("p");
    for (i = 0; i < par.length; i++) {
        if (par[i].textContent.includes("Lorem") || par[i].innerText.length > 600) {
            par[i].classList.add("cambio");
            par[i].addEventListener("click", Aviso)
        }
    }
}

function Quitar(){
    let par = document.getElementsByTagName("p");
    for (i = 0; i < par.length; i++) {
        if (par[i].textContent.includes("Lorem") || par[i].innerText.length > 600) {
            par[i].classList.remove("cambio");
            par[i].addEventListener("click", Aviso)
        }
    }
}

function Aviso() {
    var resultado = window.confirm('Se van a producir cambios en la página. ¿Estas seguro?');
    if (resultado === true) {
        window.alert('Los cambios se llevarán a cabo');
    } else { 
        window.alert('Pareces indeciso muy mal. Se harán los cambios aunque no quieras, aquí no tienes ni voz ni voto.');
    }
}
