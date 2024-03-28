// Esta função recarrega a página quando chamada
function recarregarPagina() {
    window.location.reload(); // Chamando o método reload() da propriedade location do objeto window
}

// Este evento é acionado quando a página HTML termina de carregar completamente
window.onload = function () {
    // A função anônima abaixo é executada quando a página é totalmente carregada
    window.scrollTo({
        top: 0, // Rolagem para o topo da página
        left: 0, // Rolagem para a posição horizontal inicial
        behavior: 'smooth' // Opção para uma rolagem suave e animada
    });
};