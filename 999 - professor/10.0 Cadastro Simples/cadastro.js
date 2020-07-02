"use strict";

const $novo = document.querySelector ("#novo");


const exibirModal = () => document.querySelector( "#novoAluno" ).classList.add ("exibirModal");

$novo.addEventListener ( 'click', exibirModal );