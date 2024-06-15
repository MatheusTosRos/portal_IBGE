const dialog = document.getElementById('dialog-filter')
const botaoFiltro = document.getElementById('modal-button')
const aplicaBotao = document.getElementById('aplicar')
const submitBotao = document.getElementById("busca-input")

document.addEventListener("keyprees", function(event) {
    if (event.keyCode === "Enter") {
        submitBotao.click();
    }
})

document.addEventListener("DOMContentLoaded", function() {

botaoFiltro.addEventListener("click", function () {
    dialog.showModal();
});

aplicaBotao.addEventListener("click", function () {
    dialog.close();
});
})
