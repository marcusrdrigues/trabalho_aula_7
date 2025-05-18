const botao = document.querySelector("#botao");
const areaMensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
    areaMensagem.innerHTML = "Você é capaz de consquistar tudo o que quiser!";
});