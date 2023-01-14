import { Aluno } from "./aluno/aluno";

let minhaLista: Aluno[] = [
    new Aluno("Darlan", 22),
    new Aluno("Larissa", 18),
    new Aluno("Leonardo", 20),
    new Aluno("Gabriela", 36),
    new Aluno("Mayra", 30),
    new Aluno("Gustavo", 25),
    new Aluno("Paulo", 17),
];

let gabarito: string[] = ["A", "B", "A", "A", "C", "B", "A", "C", "C", "A"];

minhaLista.map((aluno) => aluno.atribuirResposta(gabarito));

// minhaLista.map(item => )

const aprovados = minhaLista.filter((aluno) => aluno.status === "Aprovado");

console.log("Àlunos aprovados:");
console.log(aprovados);

const reprovados = minhaLista.filter((aluno) => aluno.status === "Reprovado");

console.log("Àlunos reprovados:");
console.log(reprovados);

const soma = minhaLista.reduce((current, aluno) => {
    return current + aluno.nota!;
}, 0);
let media = soma / minhaLista.length;
console.log("A média é");
console.log(media.toFixed(2));
