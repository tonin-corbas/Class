function Crear() {
    var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit lorem, fermentum quis aliquet a, ullamcorper at purus. Aenean a nunc viverra, efficitur leo at, finibus lorem. Nunc vel luctus orci, non feugiat neque. Curabitur luctus libero id risus tempor, ac lobortis enim consequat. Sed enim nisi, consequat vel risus varius, lacinia lacinia nibh. Aenean rhoncus neque a est sodales molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin nec velit massa. Sed luctus vel lorem sed mollis. Sed velit metus, luctus nec diam ac, consectetur maximus odio. Sed malesuada at arcu vitae mattis."
    var main = document.getElementById('main');
    // miraras la length
    // eliminaras el último (length - 1)
    const div = document.createElement("div");
    // textNode
    var textlorem = document.createTextNode(lorem);
    // div.append... textNo
    div.appendChild(textlorem);
    // main append... div
    main.appendChild(div);
}

function Borrar(){
    const main = document.getElementById("main");
    console.log(main);
    main.removeChild(main.lastChild);
}