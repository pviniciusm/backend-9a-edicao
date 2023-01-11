import { Fedex } from "./fedex";
import { IFreteServico } from "./frete-servico";
import { Produto } from "./produto";
import { Sedex } from "./sedex";
import { TNT } from "./tnt";

export interface IEndereco {
    rua: string;
    numero: number;
}

export interface ILoja {
    nome: string;
    endereco: IEndereco;
    produtos: Produto[];
    mostarNome(): void;
}

export interface IEstoque {
    estoque: number;
}

export class Loja implements ILoja, IEstoque {
    public nome!: string;
    private id!: string;
    protected certificacao!: string;

    public endereco!: IEndereco;
    public produtos!: Produto[];
    public estoque!: number;

    public mostarNome(): void {
        console.log(this.nome);
    }

    public calcularFrete(peso: number, servico: IFreteServico) {
        return servico.calcularFrete(peso);
    }
}

let loja = new Loja();

let sedex = new Sedex();
let fedex = new Fedex();
let tnt = new TNT();

loja.calcularFrete(15, fedex);
loja.calcularFrete(15, tnt);
