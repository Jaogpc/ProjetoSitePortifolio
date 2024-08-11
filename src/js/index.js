// passo 1 - pegar o html dos botões
const botoesCarrossel = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")
// passo 2 - identificar a ação do usuário com o botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //passo 3 - desmarcar o botão anterior
        desativarBotaoSelecionado()

        //passo 4 - marcar o botão clicado
        marcarBotaoSelecionado(botao)

        //passo 5 - esconder a imagem anteriormente selecionada
        esconderImagemAtiva()

        //passo 6 - fazer aparecer a imagem correspondente ao botão selecionado
        mostrarImagemDeFundo(indice)

        //passo 7 - esconder o texto anterior
        esconderInformacoesAtivas()

        //passo 8 - mostrar a informação do botão selecionado
        mostrarInformacoes(indice)
    })
})

//funções globais
function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado")
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa")
}

function esconderInformacoesAtivas() {
    const informacaoesAtiva = document.querySelector(".informacoes.ativa")
    informacaoesAtiva.classList.remove("ativa")
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa")
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa")
    imagemAtiva.classList.remove("ativa")
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado")
    botaoSelecionado.classList.remove("selecionado")
}