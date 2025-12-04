function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const diferenca = dataFutura - agora;

    if (diferenca <= 0) {
        return null;
    }

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    return { dias, horas, minutos, segundos };
}

function atualizarTemporizador() {
    const tempo = calcularTempoRestante(dataFutura);

    if (!tempo) {
        console.log("⏰ Tempo encerrado!");
        clearInterval(intervalId);
        return;
    }

    console.clear();
    console.log(`🔻 Tempo restante:`);
    console.log(`${tempo.dias} dias, ${tempo.horas} horas, ${tempo.minutos} minutos, ${tempo.segundos} segundos`);
}

const dataFutura = new Date("2025-12-31T23:59:59");

const intervalId = setInterval(atualizarTemporizador, 1000);

atualizarTemporizador();
