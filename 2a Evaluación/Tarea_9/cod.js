$(document).ready(function(){
    $("#ocultar").click(function(){
        $("#seccom").toggle();
    });
});
$(document).ready(function(){

        $('input').keyup(function(event) {
            if (event.which === 13)
            {
                let coment = $("#input").val();
                if(coment !== ""){
                    $("#list").append("<li>" + coment + "<button class='eliminar'>Eliminar 🗑️</button> </li>");
                    $("#input").val("");
        
                }else{
                    alert("Si quieres añadir un comentario primero debes escribir algo.")
                }
            }
        });

    $("#enviar").click(function(){
        let coment = $("#input").val();
        if(coment !== ""){
            $("#list").append("<li>" + coment + "<button class='eliminar'>Eliminar 🗑️</button> </li>");
            $("#input").val("");

        }else{
            alert("Si quieres añadir un comentario primero debes escribir algo.")
        }
    });
    $(document).on('click', '.eliminar', function(){
        $(this).parent().remove();
    });
});