"use strict";
const $lampada = document.getElementById('lampada');

const ligarLampada = () => $lampada.src = "./img/ligada.jpg";
const desligarLampada = () => $lampada.src = "./img/desligada.jpg";
const estadoDaLampada = () => !Boolean($lampada.src.match ('desligada'));

const ligaDesliga = () => {  
    if (estadoDaLampada()) {
        desligarLampada();
    }else {
        ligarLampada();
    }
}
let id;
const piscar = () => {
    if ( id === undefined){
       id = setInterval ( ligaDesliga, 500);
    }
}
const parar = () => id = clearInterval( id );

$lampada.addEventListener ( 'mouseenter', ligarLampada );
$lampada.addEventListener ( 'mouseout', desligarLampada );
$lampada.addEventListener( 'click', piscar);
document.getElementById('interruptor').addEventListener('click',parar);