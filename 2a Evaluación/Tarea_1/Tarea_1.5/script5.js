Sensores = setInterval(sensor, 1000)
function sensor(){
    Random = Math.random(18);
    if(Random > 0.85){
        console.log("¡¡¡Cuidado, aviso de incendio por altas temperaturas!!!")
        clearInterval(Sensores)
    }
    console.log(Random)
}