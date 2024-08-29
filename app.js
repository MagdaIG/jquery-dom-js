$(document).ready(function(){
    // Mostrar y ocultar el segundo texto al pasar el mouse sobre el primero
    $("#text1").hover(
        function() {
            $("#text2").fadeIn();
        },
        function() {
            $("#text2").fadeOut();
        }
    );

    // Agrandar la imagen al hacer doble clic
    $("#caja2").on('dblclick', function() {
        $("#img").css('width', '100%');
    });

    // Reducir la imagen al pasar el mouse fuera de ella
    $("#caja2").on('mouseleave', function() {
        $("#img").css('width', '20%');
    });

    // Agrandar el texto al hacer doble clic en el tercer div
    $("#caja3").on('dblclick', function() {
        $(this).css('font-size', 'xx-large');
    });
});
