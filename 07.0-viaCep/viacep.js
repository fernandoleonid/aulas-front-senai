"use stritc";

const verificarCep = () => document.getElementById ('cep').reportValidity();

const encontrarCep = async ( cep ) => {

    if ( verificarCep () ) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const getAddress = await fetch ( url );
        const address = await getAddress.json();
        preencherFormulario ( address );
    }
} 

const preencherFormulario = ( endereco ) => {
    document.getElementById ( 'endereco' ).value = endereco.logradouro;
    document.getElementById ( 'bairro' ).value = endereco.bairro;
    document.getElementById ( 'cidade' ).value = endereco.localidade;
    document.getElementById ( 'estado' ).value = endereco.uf;
}

const maskCep = ( $el ) => {
    let aux =  $el.value;
    aux = aux.replace ( /[^0-9]/g, '' );
    aux = aux.replace ( /(.{5})(.)/,'$1-$2' )
    $el.value = aux;
}

document.getElementById ( 'cep' ).addEventListener ( 'blur', ( e ) => encontrarCep ( e.target.value ) );

document.getElementById ( 'cep' ).addEventListener ( 'keyup', ( e ) => maskCep ( e.target ) );

