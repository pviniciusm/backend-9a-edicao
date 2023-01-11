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

    private validarProfessor(): boolean {
        // ....

        return true;
    }
}
