console.log('Trabalhando com Condicionais');

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos Possiveis:");
console.log(listaDeDestinos);

//Criando uma variavel de condições
//const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador +=1;
}

console.log("Destino existe: ", destinoExiste);