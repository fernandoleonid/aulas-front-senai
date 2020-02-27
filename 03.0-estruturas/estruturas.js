"use strict";



const notas = [2,8,5,0,8];
const clientes = [
    { nome: "Fernando", idade: 43, cidade: "São Roque" },
    { nome: "Ana", idade: 4, cidade: "Itapevi" },
    { nome: "Pedro", idade: 31, cidade: "Jandira" },
    { nome: "Maria", idade: 15, cidade: "Itapevi" }
]

// const nome = prompt ( "Digite seu nome");
// const idade = prompt ( "Digite seu idade");
// const cidade = prompt ( "Digite seu cidade");

// clientes.push ( {"nome": nome, "idade":idade, "cidade":cidade});


// notas.push ( confirm ("Digite uma nota")  );

/*
    MAP - Retorna um novo array do mesmo tamanho modificado ou não;
    argumentos do callback:
        1º elemento
        2º índice
        3º array
*/
const notasAtualizadas = notas.map ( nota => nota * 10  );

/*
    FILTER - Retorna um novo array filtrando pela condição;
    argumentos do callback:
        1º elemento
        2º índice
        3º array
*/
const notasAcimaDaMedia = notas.filter ( nota => nota >= 5 );

/*
    REDUCE - Retorna um único valor;
    argumentos do callback:
        1º acumulador
        2º elemento
        3º índice
        4º array
*/
const notasTotal = notas.reduce ( ( acc, nota) => acc + nota) / notas.length - 1


const notasPares100 = notas.filter ( nota => nota % 2 == 0)
                           .map ( nota => nota + 100 );


const exibirDados = ( el, cliente) => {
    el.innerHTML += `
        <div class="card text-white bg-secondary mb-3" style="width: 40vw;">
            <div class="card-header" >
                ${cliente.nome}
            </div>
            <div class="card-body">
                <p>${cliente.idade}</p>
                <p>${cliente.cidade}</p>
            </div>
        </div>
    `;
    
}

const $resultados = document.getElementById ('resultados');

const t = clientes.map ( (cliente) => exibirDados ( $resultados, cliente) );