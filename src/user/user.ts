export class User {
    username: string;
    nome: string;
    idade?: number;
    ativo: boolean;

    constructor(username: string, nome: string, idade?: number) {
        this.username = username;
        this.nome = nome;
        this.idade = idade;
        this.ativo = false;
    }

    mostarNome(): void {
        if (this.ativo === false) {
            console.log("O user não está ativo, ative ele antes");
            return;
        }

        console.log(
            `Nome: ${this.nome} - Username: ${this.username} - Ativo: ${this.ativo}`
        );
    }

    ativar() {
        this.ativo = true;
    }
}

// Nome de classe segue o padrão NomeDaClasse
// PascalCase

// Nome de método e propriedade segue o padrão nomeDoMetodo
// camelCase
