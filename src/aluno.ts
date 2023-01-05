export enum Etapa {
    Infantil,
    Fundamental,
    Medio,
}

export class Aluno {
    nome: string;
    etapa: Etapa;
    avaliacao?: Avaliacao;

    constructor(nome: string, etapa: Etapa) {
        this.nome = nome;
        this.etapa = etapa;
    }
}

export class Avaliacao {
    private nota: number;
    public materia: string;

    constructor(nota: number, materia: string) {
        this.nota = nota;
        this.materia = materia;
    }

    public alterarNota(novaNota: number) {
        if (this.validarProfessor()) {
            this.nota = novaNota;
        }
    }

    private validarProfessor() {
        // ....

        return true;
    }
}
