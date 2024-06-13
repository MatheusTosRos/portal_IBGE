document.addEventListener("DOMContentLoaded", function() {
const dialog = document.getElementById('dialog')
const botaoFiltro = document.getElementById('filtro')
const aplicaBotao = document.getElementById('aplica');

botaoFiltro.addEventListener("click", function () {
    dialog.showModal();
});

aplicaBotao.addEventListener("click", function () {
    dialog.close();
});
}
