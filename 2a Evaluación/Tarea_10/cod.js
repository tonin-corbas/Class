$(document).ready(function () {
    $(function () {
        var datepicker = $("#datepicker").datepicker({
            dateFormat: "dd/mm/yy",
            onClose: function (selectedDate) {
                $("#fechaVuelta").datepicker("option", "minDate", selectedDate);
            }
        });
        var fechaVuelta = $("#fechaVuelta").datepicker({
            dateFormat: "dd/mm/yy",
            onClose: function (selectedDate) {
                $("#datepicker").datepicker("option", "maxDate", selectedDate);
            }
        });
        
    });
    $(function () {
        $("#slider").slider();
    });
    $(function () {
        var precioMinimo = 10;
        var precioMaximo = 2000;

        $("#slider").slider({
            range: true,
            min: precioMinimo,
            max: precioMaximo,
            values: [precioMinimo, precioMaximo],
            slide: function (event, ui) {
                $("#precio").val("€" + ui.values[0] + " - €" + ui.values[1]);
            }
        });

        $("#precio").val("€" + $("#slider").slider("valor", 0) +
            " - €" + $("#slider").slider("valor", 1));
    });

    $("#destino").change(function () {
        var destino = $(this).val();

        var nuevoPrecioMinimo = calcularPrecioMinimo(destino);

        $("#slider").slider("option", "min", nuevoPrecioMinimo);
    });
    $(function () {
        var destinos = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga", "Cáceres", "Palma", "Las Palmas", "Bilbao", "Alemania", "Londres", "Tokio", "Seoul", "EEUU", "Zamora"]; // Lista de destinos

        $("#destino").autocomplete({
            source: destinos
        });
    });
    function calcularPrecioMinimo(destino){
        var preciosMinimos = {
            "Madrid": 10,
            "Barcelona": 40,
            "Valencia": 20,
            "Sevilla": 25,
            "Zaragoza": 20,
            "Málaga": 50,
            "Cáceres": 20,
            "Palma": 60,
            "Las Palmas": 70,
            "Bilbao": 55,
            "Alemania": 200,
            "Londres": 250,
            "Tokio": 1300,
            "Seoul": 1200,
            "EEUU": 1500,
            "Zamora": 2000
        };

        return preciosMinimos[destino];
    }
    $("#Reservar").click(function(){
        alert("Estamos procesando los filtros que ha añadio y en breves momentos le mostraremos los mejores vuelos con los filtros indicados.")
    })
});