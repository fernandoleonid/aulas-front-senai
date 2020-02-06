const $calcular = document.getElementById('calcular');

function calcularMedia() {
    const $nome = document.getElementById('nome');
    const $nota1 = document.getElementById('nota1');
    const $nota2 = document.getElementById('nota2');
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');

    const media = (parseInt($nota1.value) + parseInt($nota2.value)) / 2;

    if (media >= 5) {
        $situacao.value = "Aprovado";
        $situacao.classList.remove('reprovado');
        $situacao.classList.add('aprovado');
    } else {
        $situacao.value = "Reprovado";
        $situacao.classList.remove('aprovado');
        $situacao.classList.add('reprovado');
    }

    $media.value = media;
}

$calcular.addEventListener('click', calcularMedia);