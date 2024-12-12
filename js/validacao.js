const numeroAleatorio1 = (Math.random() * 100).toFixed(0);
const numeroAleatorio2 = (Math.random() * 100).toFixed(0);

const spanPrimeiroNumero = document.getElementById("primeiro_numero");
spanPrimeiroNumero.textContent = numeroAleatorio1;

const spanSegundoNumero = document.getElementById("segundo_numero");
spanSegundoNumero.textContent = numeroAleatorio2;

document.getElementById("botao_verificacao").addEventListener("click", () => {

    const spanMensagemValidacao = document.getElementById("mensagem_verificacao");

    const resultadoEsperado = Number(numeroAleatorio1) + Number(numeroAleatorio2);

    const resultadoCliente = document.getElementById("resultado_soma").value;


    if(resultadoEsperado == resultadoCliente) {
        spanMensagemValidacao.textContent = "Sua resposta está correta!";
    } else {
        spanMensagemValidacao.textContent = "Sua resposta está errada, tente novamente.";
    }
    
});
