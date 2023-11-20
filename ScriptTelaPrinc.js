document.addEventListener("DOMContentLoaded", function () {
    var Produt = document.getElementById("Prod");

    Produt.addEventListener("click", function () {
        // Redirecionar para a página "X.html" quando o botão "Submit" é clicado
        window.location.href = "TelaProd.html";
    });
});