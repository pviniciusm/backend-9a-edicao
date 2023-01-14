export class Aluno {
    nome: string;
    idade: number;
    nota?: number;
    status?: "Aprovado" | "Reprovado";

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    atribuirResposta(gabarito: string[]) {
        const resposta = ["A", "B", "C"];
        const respostasAluno = [];
        this.nota = 0;

        for (let i of gabarito) {
            let resultado = Math.floor(Math.random() * 10) % 3;
            respostasAluno.push(resposta[resultado]);

            if (i === resposta[resultado]) {
                this.nota += 1;
            }
        }
        this.atribuirStatus();

        // console.log(`Aluno: ${this.nome}`);
        // console.log(`Gabarito: ${gabarito}`);
        // console.log(`Resposta: ${respostasAluno}`);
        // console.log(`Nota: ${this.nota}`);
        // console.log(`Status: ${this.status}\n\n`);
    }

    atribuirStatus() {
        this.status = this.nota! >= 6 ? "Aprovado" : "Reprovado";
    }
}
