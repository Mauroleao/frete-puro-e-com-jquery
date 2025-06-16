// formas de se criar objetos em JavaScript

const carro = {
    modelo: 'Fiesta',
    fabricante: 'ford',
    anoModelo: 1969,
    anoFabricacao: 1969,
    acelerar: function() {
        console.log('vruum...');
    },
}


const carroDeMaria = {
    modelo:'Ka',
    fabricante: 'ford',
    anoModelo: 2020,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log('vruum...');
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('vruum...');
    }

}

const carroDoJoao2 = new Carro('Fiesta', 'Ford', 1970, 1970);
const carroDaMaria2 = new Carro('Ka', 'Ford', 1970, 1970);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = 'João';
const idade = 30;
const ehMaiorDeIdade = true
const conhecimentos = ['JavaScript', 'HTML', 'CSS'];

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos

}

console.log(pessoa.nome);
console.log(pessoa['nome']);

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}  
exibeAtributo('nome');

pessoa['sobrenome'] = 'Silva';

Object.freeze(pessoa)

pessoa.nome = 'Maria';

if (pessoa['sobrenome']){
    console.log('tem sobrenome');
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

console.log(Object.keys(pessoa).length);

console.log(Object.values(pessoa));
