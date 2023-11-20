document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var confirmYes = document.getElementById("confirm-yes");
    var confirmNo = document.getElementById("confirm-no");

    function showPopup() {
        popup.style.display = "flex";
    }

    function hidePopup() {
        popup.style.display = "none";
    }

    confirmYes.addEventListener("click", function () {
        // Se o usuário clicar em "Sim", redirecione-o para a página principal
        window.location.href = "Cadastro.html";
    });

    confirmNo.addEventListener("click", function () {
        // Se o usuário clicar em "Não", esconda o pop-up
        window.location.href = "Não.html";
    });

    // Mostra o pop-up quando a página é carregada
    showPopup();
});