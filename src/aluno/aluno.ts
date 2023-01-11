import { Avaliacao } from "./avaliacao";

export enum Etapa {
    Infantil,
    Fundamental,
    Medio,
}

export class Aluno {
    nome: string;
    etapa: Etapa;
    avaliacao?: Avaliacao;

    constructor(nome: string, etapa: Etapa, avaliacao: Avaliacao) {
        this.nome = nome;
        this.etapa = etapa;
    }
}
