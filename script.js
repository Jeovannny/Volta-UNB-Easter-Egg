//Constantes e variáveis
const btn = document.querySelector('.top-button');
const h1Dias = document.getElementById("dias");
const h2Texto = document.querySelector(".top-button");
const h3Texto = document.querySelector("h3.texto");

let cliques = 0;

function atualizarContador() {
    const hoje = moment();

    //Clicar 16 vezes
    if (cliques >= 16) {
        const voltaBia = moment("2026-01-18");
        const diferencaDias = voltaBia.diff(hoje, 'days');

        //Mudar Texto
        h1Dias.innerHTML = diferencaDias;
        h2Texto.innerHTML = "Quanto tempo para a Bia voltar?";
        h3Texto.innerHTML = "dias para a volta da Bia. Volta logo 😭😭😭";

        // Opcional: muda a cor para dar um feedback visual
        document.body.style.backgroundColor = "	#e30118";
    } else {
        // Lógica padrão (UNB)
        const voltaUNB = moment("2026-03-16");
        const diferencaDias = voltaUNB.diff(hoje, 'days');
        h1Dias.innerHTML = diferencaDias;
    }
}

// Contador de Cliques 
btn.addEventListener('click', () => {
    cliques++;
    console.log(`Cliques: ${cliques}`);
    atualizarContador();
});

atualizarContador();