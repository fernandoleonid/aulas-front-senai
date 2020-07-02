"use strict";

import { validator, emailValidator } from "./masks.js";

const $novo = document.getElementById('novo');
const $fechar = document.getElementById('fechar');
const $salvar = document.getElementById('salvar');

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add ('exibirModal');
const fecharModal = () => document.querySelector('.conteiner-modal').classList.remove('exibirModal');
const salvarAluno = () => {
    fecharModal();
};

validator (document.getElementById('form'));
emailValidator(document.getElementById('email'));

$novo.addEventListener('click',exibirModal);
$fechar.addEventListener('click',fecharModal);
$salvar.addEventListener('click',salvarAluno);

