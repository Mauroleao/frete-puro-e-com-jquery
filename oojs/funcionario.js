function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz: Olá!');
    };
    this.dizCargo = function() {
        console.log(this.cargo);
    };
}

function Funcionario(nome, cargo, salario) {
    Pessoa.call(this, nome); // Chama o construtor Pessoa para herdar o método dizOi
    this.cargo = cargo;
    // this.salario = salario;
}

// Herdar os métodos de Pessoa
Funcionario.prototype = Object.create(Pessoa.prototype);
const funcionario1 = new Funcionario('Maria', 'Desenvolvedora', 5000);
const pessoa = new Pessoa('Livia');

funcionario1.dizOi();
funcionario1.dizCargo();
